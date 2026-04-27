---
layout: ../_includes/custom-page.njk
title: Request and set up licences
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">Find out how to request AI tool licences for your team and get set up with support from AI Engineering Lab.</p>

{{ govukAccordion({
  id: "accordion-getting-started",
  items: [
    {
      heading: { text: "Before you request licences" },
      content: { html: "
        <p class='govuk-body'>Your team should have:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>a clear use case for using AI tools</li>
          <li>time and capacity to test and adopt the tooling</li>
          <li>agreement within your organisation to use AI tools</li>
          <li>approval from your cyber security team to request licences</li>
          <li>a sponsor</li>
        </ul>
        <h3 class='govuk-heading-s'>Identify a sponsor</h3>
        <p class='govuk-body'>You must have a sponsor before requesting licences.</p>
        <p class='govuk-body'>Sponsors are usually a senior member of your team or organisation who can:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>support your team's use of AI tools</li>
          <li>confirm your use case</li>
          <li>help remove organisational or delivery blockers</li>
        </ul>
        <p class='govuk-body'><a href='/roles/sponsors/' class='govuk-link'>Read more about the sponsor role</a>.</p>
        <h3 class='govuk-heading-s'>Complete the security requirements</h3>
        <p class='govuk-body'>Before requesting licences, confirm that your team has:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>received authorisation from your security or cyber security teams to request licences</li>
          <li>completed a departmental security assessment for each tool</li>
          <li>a Governance Security Document (GSD) pack that has been signed off by your Senior Responsible Owner (SRO), which covers architecture, data flows, threats, and risks where applicable</li>
          <li>a completed Data Protection Impact Assessment (DPIA), if personal data will be processed</li>
          <li>acceptance from your Senior Information Risk Owner (SIRO) for any applicable residual risks</li>
          <li>logged AI tool risks into your departmental risk register</li>
          <li>ensured that your IT or network team has allow-listed required tool domains and endpoints</li>
        </ul>
        <p class='govuk-body'>If you are unsure about any of these steps, speak to your local IT or security team before proceeding.</p>
        <h3 class='govuk-heading-s'>Device requirements</h3>
        <p class='govuk-body'>You may need to use a managed (work-issued) device to access AI tools. This depends on your organisation's security policies and the AI tool you are using.</p>
        <p class='govuk-body'>Before getting set up, you should confirm with your local IT or security team:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>if you will be working from a corporate device, VDI, or secure network zone, firewall and connectivity rules can differ between these environments</li>
          <li>that endpoint protection and monitoring is active on any device you intend to use</li>
          <li>if your device requires proxy or TLS inspection settings to be configured for AI tool access</li>
        </ul>
        <p class='govuk-body'>Check with your local IT or security team if you are unsure.</p>
        <h3 class='govuk-heading-s'>Permissions and responsibilities</h3>
        <p class='govuk-body'>When using AI tools, your team is responsible for:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>following your organisation's security and data policies</li>
          <li>only using AI tools with data classified at OFFICIAL or OFFICIAL-SENSITIVE, unless the specific tool has been separately accredited for higher classifications</li>
          <li>never including personal data or authentication credentials in prompts or context</li>
          <li>security configurations (such as firewall rules and security group settings), including financial account data and information classified above OFFICIAL</li>
          <li>reviewing and validating all AI-generated outputs before using them</li>
          <li>reporting any accidental sharing of prohibited data immediately through your organisation's security incident process</li>
        </ul>
        <p class='govuk-body'>Team leads are additionally responsible for verifying user training, implementing guardrails, and reviewing AI-generated code before it is used.</p>
        <p class='govuk-body'>Your access and permissions will depend on the tool you are using, and your organisation's policies.</p>
      " }
    },
    {
      heading: { text: "Request licences" },
      content: { html: "
        <p class='govuk-body'>You must first register your interest by emailing <a href='mailto:gdsengineeringexcellence@dsit.gov.uk' class='govuk-link'>gdsengineeringexcellence@dsit.gov.uk</a>.</p>
        <p class='govuk-body'>You should provide information about:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>your reason for wanting to work with AI Engineering Lab, such as implementing tooling within your team</li>
          <li>what AI Engineering Lab can support you with, such as knowledge-sharing, adoption support, and AI licences</li>
          <li>the size of your engineering team and a brief description of the work they're doing</li>
          <li>your team's capacity to work with AI Engineering Lab over the next month</li>
        </ul>
        <p class='govuk-body'>Once you have registered your interest, complete and submit the licence request form.</p>
        <p class='govuk-body'><a href='/explore/how-to-adopt-ai-tools/' class='govuk-link'>Read more about what adoption can look like for your team</a>.</p>
      " }
    },
    {
      heading: { text: "After you get your licences" },
      content: { html: "
        <h3 class='govuk-heading-s'>Install and access your tools</h3>
        <p class='govuk-body'>Read the getting started and set up guides for your tool for information on installation, authentication, daily coding workflows, and essential practices for using AI coding tools effectively.</p>
        <p class='govuk-body'>For user tools, refer to the relevant getting started and set up guides in the <a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/user-tool-guides' class='govuk-link' target='_blank' rel='noopener noreferrer'>user tool guides folder</a>.</p>
        <p class='govuk-body'>For manager tools, see the relevant getting started and set up guides in the <a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/manager-tool-guides' class='govuk-link' target='_blank' rel='noopener noreferrer'>manager tool guides folder</a>.</p>
        <h3 class='govuk-heading-s'>Learn how to use your AI tool</h3>
        <p class='govuk-body'>All guidance and documentation is available in the <a href='https://github.com/govuk-digital-backbone/aiengineeringlab' class='govuk-link' target='_blank' rel='noopener noreferrer'>AI Engineering Lab repository</a>.</p>
        <ol class='govuk-list govuk-list--number'>
          <li><a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/manager-tool-guides' class='govuk-link' target='_blank' rel='noopener noreferrer'>Read the manager tool guides</a> for installation and configuration instructions for your AI coding tool.</li>
          <li>Share the <a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/user-tool-guides' class='govuk-link' target='_blank' rel='noopener noreferrer'>user tool guides</a> with your team for information on how to use each tool.</li>
          <li><a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/prompt-library' class='govuk-link' target='_blank' rel='noopener noreferrer'>Access the prompt library</a> for examples and techniques to use AI coding tools effectively.</li>
          <li><a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main/playbooks' class='govuk-link' target='_blank' rel='noopener noreferrer'>Explore the playbooks</a> for best practices and guidance on specific tasks.</li>
          <li><a href='https://github.com/govuk-digital-backbone/aiengineeringlab/blob/main/governance/guardrails-base.md' class='govuk-link' target='_blank' rel='noopener noreferrer'>Review the guardrails</a> to understand what data you can and cannot share with AI tools.</li>
        </ol>    <h3 class='govuk-heading-s'>Support adoption in your organisation</h3>
        <p class='govuk-body'>To support adoption:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li><a href='/explore/change-management/' class='govuk-link'>read about our recommended change management framework</a></li>
          <li><a href='/roles/champions/' class='govuk-link'>encourage your team members to become champions for your organisation</a></li>
          <li><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>sign up to the Knowledge Hub cross-government community</a></li>
        </ul>
      " }
    },
    {
      heading: { text: "Get help" },
      content: { html: "
        <p class='govuk-body'>If you need help:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>speak to your sponsor or champions</li>
          <li>contact your local IT team for access or installation issues</li>
          <li>email the AI Engineering Lab team at <a href='mailto:gdsengineeringexcellence@dsit.gov.uk' class='govuk-link'>gdsengineeringexcellence@dsit.gov.uk</a></li>
        </ul>
      " }
    }
  ]
}) }}
