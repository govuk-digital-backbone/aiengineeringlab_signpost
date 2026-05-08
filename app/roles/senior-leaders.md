---
layout: ../_includes/custom-page.njk
title: Senior leaders and decision-makers
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">AI Engineering Lab is a UK government programme designed to help public sector organisations adopt AI coding tools safely and effectively.</p>

<p class="govuk-body">We provide:</p>

<ul class="govuk-list govuk-list--bullet">
  <li>access and implementation of AI coding tools</li>
  <li>personalised adoption plans for your organisation</li>
  <li>guidance, training and templates</li>
  <li>change management resources</li>
  <li>community events and workshops</li>
</ul>

{{ govukAccordion({
  id: "accordion-senior-leaders",
  items: [
    {
      heading: { text: "Is this right for my organisation?" },
      content: { html: "
        <p class='govuk-body'>We work with teams at all maturity levels, from those just starting to explore AI coding tools to those already using them and wanting structured support.</p>
        <p class='govuk-body'>When you register interest, we'll assess your organisation's readiness, considering your technical infrastructure, security requirements, and team capacity. Then, we'll tailor support based on that.</p>
        <p class='govuk-body'>This programme supports organisations that:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>have software engineering teams</li>
          <li>want to improve engineering productivity</li>
          <li>are ready to invest time in adoption and change management</li>
          <li>have engineers available to participate in training and community activities</li>
          <li>have senior leadership support for AI coding tools adoption</li>
        </ul>
      " }
    },
    {
      heading: { text: "Supporting you on the adoption journey" },
      content: { html: "
        <p class='govuk-body'>Adopting new tools and ways of working requires a people-led approach. We'll provide support to help you navigate this change, including:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>coaching in a <a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link'>change management framework in the Knowledge Hub</a></li>
          <li>1-to-1 support to identify and develop AI champions in your organisation</li>
          <li>change management training for your AI champions to help them drive adoption</li>
          <li>communications plans and templates</li>
        </ul>
        <p class='govuk-body'><a href='/explore/how-to-adopt-ai-coding-tools/' class='govuk-link'>Discover how to adopt AI coding tools</a> and how we can support you through it.</p>
      " }
    },
    {
      heading: { text: "Risk mitigation and security" },
      content: { html: "
        <p class='govuk-body'>Before adopting AI coding tooling, your organisation should have an AI policy in place. The <a href='https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html' class='govuk-link'>AI playbook for the UK government</a> provides guidance on working with AI technologies safely, effectively and responsibly.</p>
        <p class='govuk-body'>We can help you address common security concerns when adopting AI coding tools.</p>
        <h3 class='govuk-heading-s'>Data protection and confidentiality</h3>
        <p class='govuk-body'>Including:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>guidance on what data can and cannot be shared with AI coding tools</li>
          <li>configuration options for data retention and privacy</li>
          <li>integration with your existing security controls</li>
        </ul>
        <h3 class='govuk-heading-s'>Code quality and security</h3>
        <p class='govuk-body'>Including:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>guidance for reviewing AI-generated code</li>
          <li>integration with Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) tools</li>
          <li>testing patterns for AI-assisted development</li>
        </ul>
        <h3 class='govuk-heading-s'>Cyber assurance</h3>
        <p class='govuk-body'>Including:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>security assessment templates</li>
          <li>vendor assurance documentation</li>
          <li>support when working with your security teams</li>
        </ul>
        <p class='govuk-body'>We provide configuration guidance rather than prescriptive security approval, working with your existing governance processes.</p>
      " }
    },
    {
      heading: { text: "Guidance and resources" },
      content: { html: "
        <h3 class='govuk-heading-s'>AI Engineering Lab repository</h3>
        <p class='govuk-body'>The AI Engineering Lab repository is the main source of guidance and training materials on using AI coding tools in government. It also includes information on gathering data and building your case for adoption.</p>
        <p class='govuk-body'><a href='https://github.com/govuk-digital-backbone/aiengineeringlab' class='govuk-link'>Visit the AI Engineering Lab repository on GitHub</a>.</p>
        <h3 class='govuk-heading-s'>Knowledge Hub</h3>
        <p class='govuk-body'>The Knowledge Hub is where you'll find change management resources, community support and peer learning opportunities. You need a government or public sector email address to sign up. Personal email addresses are not accepted.</p>
        <p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link'>Access the Knowledge Hub</a>.</p>
      " }
    },
    {
      heading: { text: "Register your interest" },
      content: { html: "
        <p class='govuk-body'>To register your interest, email <a href='mailto:gdsengineeringexcellence@dsit.gov.uk' class='govuk-link'>gdsengineeringexcellence@dsit.gov.uk</a>.</p>
        <p class='govuk-body'>You should provide information about:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>your reason for wanting to work with us, such as implementing tooling within your team</li>
          <li>what AI Engineering Lab can support you with, such as knowledge-sharing, adoption support, and AI licences</li>
          <li>the size of your engineering team and a brief description of the work they're doing</li>
          <li>your team's capacity to work with AI Engineering Lab over the next month</li>
        </ul>
      " }
    }
  ]
}) }}
