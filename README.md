**Edge Delivery Services – EDS Tutorial Demo**
This is the codebase for the fictional EDS Tutorial site, demonstrating Adobe's Edge Delivery Services in action. It showcases:

Experimentation

Conversion Tracking

Document-Based Content Authoring

🌍 Environments
Preview: https://main--edstutorial--aruncourage.aem.page/

Live: https://main--edstutorial--aruncourage.aem.live/

📁 Repository
GitHub: https://github.com/aruncourage/edstutorial

📦 Installation
bash
Copy
Edit
npm i
aem up

🔑 Prerequisites
Ensure the **AEM Sidekick Chrome extensio**n is installed.


Right-click the Sidekick extension → View document source



# Replace with your fork's live URL
WKND_URL=https://main--edstutorial--aruncourage.aem.live npm run generate-traffic

# Example: 1000 simulated visits
WKND_URL=https://main--edstutorial--aruncourage.aem.live ITERATIONS=1000 npm run generate-traffic
🤖 Slack Bot Integration
Slack Bot Docs

After setting up conversion tracking, integrate Slack Bot.


Authoring Docs

Ensure fstab.yaml points to your SharePoint/Drive folder.

Modify documents in your drive.

Use the AEM Sidekick to Preview and Publish.

Explore:

Anatomy of a Project
Block Collection
Query index.xls
Redirect.xls
Bulk meta data
Meta data

💻 Local Development
Clone your forked repo locally:

git clone https://github.com/aruncourage/edstutorial
cd edstutorial
npm i
npm install -g @adobe/helix-cli
Opens browser at http://localhost:3000

Start building in your IDE.

📚 Resources
Adobe Edge Delivery Services



