---
layout: ../_includes/custom-page.njk
title: Senior leaders and decision-makers
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-senior-leaders",
  items: [
    {
      heading: { text: "What is AI Engineering Lab?" },
      content: { html: "<p class='govuk-body'>AI Engineering Lab is a UK government programme designed to help public sector departments adopt AI coding tools safely and effectively.</p>\n<p class='govuk-body'>We provide:</p><ul class='govuk-list govuk-list--bullet'><li>access and implementation of AI coding tools</li><li>personalised adoption plans tailored to your organisation</li><li>best practice guidance, training and templates</li><li>change management resources</li><li>community events and workshops</li></ul>" }
    },
    {
      heading: { text: "Is this right for my organisation?" },
      content: { html: "<p class='govuk-body'>We work with teams at all maturity levels, from those just starting to explore AI coding tools to those already using them and wanting structured support.</p><p class='govuk-body'>When you register interest, we'll assess your organisation's readiness, considering your technical infrastructure, security requirements, and team capacity. Then, we'll tailor support based on that.</p><p class='govuk-body'>This programme supports departments that:</p><ul class='govuk-list govuk-list--bullet'><li>have software engineering teams</li><li>want to improve engineering productivity</li><li>are ready to invest time in adoption and change management</li><li>have engineers available to participate in training and community activities</li><li>have senior leadership support for AI tool adoption</li></ul>" }
    },
    {
      heading: { text: "Supporting you on the adoption journey" },
      content: { html: "<p class='govuk-body'>Adopting new tools and ways of working requires a people-led approach. We’ll provide support to help you navigate this change, including:</p><ul class='govuk-list govuk-list--bullet'><li>coaching in a <a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link'>change management framework in the Knowledge Hub</a></li><li>1-to-1 support to identify and mobilise AI champions in your organisation</li><li>change management training for your AI champions to help them drive adoption</li><li>communications plans and templates</li></ul><p class='govuk-body'><a href='/explore/how-to-adopt-ai-tools/' class='govuk-link'>Discover how to adopt AI tools</a>and how we can support you through it.</p>" }
    },
    {
      heading: { text: "Building a business case for AI coding tools" },
      content: { html: "<p class='govuk-body'>Evidence from early adopters shows significant benefits.</p>\n<h3 class='govuk-heading-s'>Productivity gains</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>15% to 25% reduction in time to complete coding tasks</li>\n<li>20% to 30% faster code review cycles</li>\n<li>improved developer satisfaction and reduced cognitive load</li>\n</ul>\n<h3 class='govuk-heading-s'>Quality improvements</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>15% to 20% reduction in defect density</li>\n<li>better documentation and code maintainability</li>\n<li>faster onboarding for new team members</li>\n</ul>\n<h3 class='govuk-heading-s'>Capacity creation</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>teams free up 10% to 15% capacity for new work</li>\n<li>20% reduction in technical debt remediation costs</li>\n<li>faster delivery of new features and services</li>\n</ul>\n<p class='govuk-body'>We provide guidance for building business cases with metrics frameworks and Return on Investment (ROI) calculations. We can also connect you with departments already measuring these benefits in their organisations.</p>" }
    },
    {
      heading: { text: "Risk mitigation and security" },
      content: { html: "<p class='govuk-body'>We can help you address common security concerns when adopting AI coding tools.</p>\n<h3 class='govuk-heading-s'>Data protection and confidentiality</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>guidance on what data can and cannot be shared with AI tools</li>\n<li>configuration options for data retention and privacy</li>\n<li>integration with your existing security controls</li>\n</ul>\n<h3 class='govuk-heading-s'>Code quality and security</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>best practices for reviewing AI-generated code</li>\n<li>integration with Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST) tools</li>\n<li>testing patterns for AI-assisted development</li>\n</ul>\n<h3 class='govuk-heading-s'>Cyber assurance</h3>\n<p class='govuk-body'>Including:</p>\n<ul class='govuk-list govuk-list--bullet'>\n<li>security assessment templates</li>\n<li>vendor assurance documentation</li>\n<li>liaison with your security teams</li>\n</ul>\n<p class='govuk-body'>We provide configuration guidance rather than prescriptive security approval, working with your existing governance processes.</p>" }
    },
    {
      heading: { text: "Guidance and resources" },
      content: { html: "<h3 class='govuk-heading-s'>AI Engineering Lab repository</h3>\n<p class='govuk-body'>The AI Engineering Lab repository is a central hub for guidance, best practice and training materials on using AI coding assistants in government. It also includes information on gathering data and building your case for adoption.</p>\n<p class='govuk-body'><a href='https://github.com/govuk-digital-backbone/aiengineeringlab' class='govuk-link'>Visit the AI Engineering Lab repository on GitHub</a></p>\n<h3 class='govuk-heading-s'>Knowledge Hub</h3>\n<p class='govuk-body'>The Knowledge Hub is where you'll find change management resources, community support and peer learning opportunities. You need a government or public sector email address to sign up. Personal email addresses are not accepted.</p>\n<p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link'>Access the Knowledge Hub</a></p>" }
    },
    {
      heading: { text: "Register your interest" },
      content: { html: "<p class='govuk-body'>To register your interest, email <a href='mailto:ai-engineering-lab@digital.cabinet-office.gov.uk' class='govuk-link'>ai-engineering-lab@digital.cabinet-office.gov.uk</a></p><p class='govuk-body'>You should provide information about:</p><ul class='govuk-list'><li>- what you're hoping to achieve by working with AI Engineering Lab</li><li>- what AI Engineering Lab can support you with, for example knowledge sharing, adoption support, or AI licenses</li><li>- the size of your engineering team and a brief description of the work they're doing</li><li>- your team's capacity to work with AI Engineering Lab over the next month</li></ul>" }
    }
  ]
}) }}
