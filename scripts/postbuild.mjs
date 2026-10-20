// Runs after `next build` (static export -> ./out). Injects values from content/site.ts
// into the files that are not processed by Next.js, so nothing needs editing by hand.
import fs from "node:fs";
import path from "node:path";

const site = fs.readFileSync("content/site.ts", "utf8");
const pick = (key) => {
  const m = site.match(new RegExp(String.raw`\b${key}:\s*"([^"]*)"`));
  if (!m) throw new Error(`siteConfig.${key} not found in content/site.ts`);
  return m[1];
};
const email = pick("email");
const url = pick("url").replace(/\/$/, "");

const phpPath = path.join("out", "contact.php");
fs.writeFileSync(phpPath, fs.readFileSync(phpPath, "utf8").replaceAll("__CONTACT_EMAIL__", email));

const llmsPath = path.join("out", "llms.txt");
if (fs.existsSync(llmsPath)) {
  fs.writeFileSync(llmsPath, fs.readFileSync(llmsPath, "utf8").replaceAll("https://www.academify.example", url));
}

console.log(`postbuild: contact.php -> ${email}; site url -> ${url}`);

// Keep real SMTP credentials out of the web root: move smtp-config.php to ./deploy-private (gitignored)
// so it is uploaded ONE LEVEL ABOVE public_html instead of inside it.
const smtpSrc = path.join("out", "smtp-config.php");
if (fs.existsSync(smtpSrc)) {
  fs.mkdirSync("deploy-private", { recursive: true });
  fs.renameSync(smtpSrc, path.join("deploy-private", "smtp-config.php"));
  console.log("postbuild: smtp-config.php moved to ./deploy-private (upload above public_html)");
}
