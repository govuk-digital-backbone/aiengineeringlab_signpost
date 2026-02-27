---
layout: ../_includes/custom-page.njk
title: Software engineers
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-engineers",
  items: [
    {
      heading: { text: "AI Engineering Lab repository" },
      content: { html: "
        <p class='govuk-body'>The AI Engineering Lab repository provides reusable guidance, templates, training materials, and practices for safely and effectively adopting AI code assistants across government.</p>
        <p class='govuk-body'>You'll find:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>guides to get you started with different AI coding tools</li>
          <li>prompt libraries and examples</li>
          <li>code examples and implementation patterns</li>
          <li>security guardrails and configuration guidance</li>
          <li>testing approaches for AI-generated code</li>
        </ul>
        <p class='govuk-body'><a href='https://github.com/govuk-digital-backbone/aiengineeringlab/tree/main' class='govuk-link' target='_blank' rel='noopener noreferrer'>Visit the AI Engineering Lab repository on GitHub</a></p>
      " }
    },
    {
     heading: { text: "Training, events and community" },
      content: { html: "
        <p class='govuk-body'>Build your skills and connect with other engineers across government.</p>
        <p class='govuk-body'>You can find a calendar of upcoming workshops, events and training sessions on the Knowledge Hub. You need a government or public sector email address to sign up. Personal email addresses are not accepted.</p>
        <p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>Access the Knowledge Hub</a></p>
        <h3 class='govuk-heading-s'>Workshops and hands-on sessions</h3>
        <p class='govuk-body'>Join facilitated workshops where you'll work on real problems with support from experienced engineers.</p>
        <h3 class='govuk-heading-s'>Hackathons and coding challenges</h3>
        <p class='govuk-body'>Take part in hands-on coding events where you'll practice using AI tools in realistic scenarios, working through common challenges in a supported environment.</p>
        <h3 class='govuk-heading-s'>Community and showcases</h3>
        <p class='govuk-body'>Connect with engineers across government, join monthly showcases, and become a champion in your department.</p>
      " }
    },
    {
      heading: { text: "Getting support" },
      content: { html: "
        <p class='govuk-body'><strong>Email</strong></p>
        <p class='govuk-body'><a href='mailto:ai-engineering-lab@digital.cabinet-office.gov.uk' class='govuk-link'>ai-engineering-lab@digital.cabinet-office.gov.uk</a></p>
        <p class='govuk-body'>We aim to respond within 2 working days.</p>
      " }
    },
    {
      heading: { text: "Register your interest" },
      content: { html: "<p class='govuk-body'>To register your interest, email <a href='mailto:ai-engineering-lab@digital.cabinet-office.gov.uk' class='govuk-link'>ai-engineering-lab@digital.cabinet-office.gov.uk</a></p><p class='govuk-body'>You should provide information about:</p><ul class='govuk-list govuk-list--bullet'><li>What you're hoping to achieve by working with AI Engineering Lab</li><li>What AI Engineering Lab can support you with, for example knowledge sharing, adoption support, or AI licenses</li><li>The size of your engineering team and a brief description of the work they're doing</li><li>Your team's capacity to work with AI Engineering Lab over the next month</li></ul>" }
    }
  ]
}) }}
