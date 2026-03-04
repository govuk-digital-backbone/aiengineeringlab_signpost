---
layout: ../_includes/custom-page.njk
title: How to adopt AI tools
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">If you're interested in adopting AI tools, AI Engineering Lab can help you.</p>

<p class="govuk-body">You'll start by assessing where your team is with AI tools. This is important to understand because organisations progress at different paces, with some moving quickly and others taking longer.</p>

<p class="govuk-body">Once you know this, we can work with you to agree on a tailored plan. Below, you will find examples of what each adoption stage looks like for these different types of teams.</p>

<h2 class="govuk-heading-l">What sort of team do you have?</h2>

{{ govukAccordion({
  id: "accordion-adoption",
  items: [
    {
      heading: { text: "My team has no experience with AI coding tools" },
      content: { html: "
        <p class='govuk-body'>If your teams are new to AI coding tools, we'll provide intensive support to get adoption started.</p>
        <p class='govuk-body'>The journey typically involves the following steps.</p>
        <h3 class='govuk-heading-s'>1. Register your interest</h3>
        <p class='govuk-body'>Once you have registered your interest, we'll arrange conversations to understand your situation. This typically takes 2 to 4 weeks for more complex cases.</p>
        <h3 class='govuk-heading-s'>2. Identify your organisation's needs</h3>
        <p class='govuk-body'>We'll discuss your current setup, goals, constraints, and identify senior sponsors. You'll receive an adoption plan tailored to your starting point. Teams new to AI coding tools get more intensive help, with forward deployed engineers working alongside them.</p>
        <h3 class='govuk-heading-s'>3. Build skills and new ways of working</h3>
        <p class='govuk-body'>A dedicated support team (forward deployed engineer, delivery manager, and change lead) will work with you. Forward deployed engineers join your teams, working alongside them on real code. Training is hands-on, including workshops, pairing sessions, and hackathons. Forward deployed engineers are trained in our change management framework to support and guide teams.</p>
        <p class='govuk-body'>We offer coaching to senior leaders and sponsors on our change management framework. We'll identify and develop AI champions in our change management framework, with protected time agreed. Our AI champion community will provide support throughout the adoption journey, including with engagement and communications. The change lead works on adoption blockers and addresses resistance. You'll connect to the cross-government community for peer support.</p>
        <h3 class='govuk-heading-s'>4. Embed and grow capability</h3>
        <p class='govuk-body'>Before direct support ends, you'll need to consider ongoing investment, including licence costs. Evidence gathered through the programme will support your business case. Adoption continues after our support ends, sustained by your champions, ongoing community connection, and access to best practice resources.</p>
        <p class='govuk-body'>People adopt new tools at different rates. We focus on supporting those ready to try them, as their success often encourages others.</p>
      " }
    },
    {
      heading: { text: "My team has some experience with AI coding tools" },
      content: { html: "
        <p class='govuk-body'>If your teams have started using tools but need to build confidence and embed new ways of working, we'll provide structured support.</p>
        <p class='govuk-body'>The journey typically involves the following steps.</p>
        <h3 class='govuk-heading-s'>1. Register your interest</h3>
        <p class='govuk-body'>Once you've registered your interest, we'll arrange an initial conversation to understand what's already in place, what you're trying to achieve, and whether AI Engineering Lab is the right fit. This typically takes a few days to 2 weeks.</p>
        <h3 class='govuk-heading-s'>2. Identify your organisation's needs</h3>
        <p class='govuk-body'>We'll discuss your current setup, your goals, your constraints, and identify who will champion adoption. At the end, you'll have an adoption plan setting out what will happen, when, and how we'll measure success.</p>
        <h3 class='govuk-heading-s'>3. Build skills and new ways of working</h3>
        <p class='govuk-body'>We offer coaching to senior leaders and sponsors on our change management framework. We'll identify and develop champions who will drive adoption and provide support using our change management framework. Your teams will build skills through workshops and self-paced materials, and apply tools to real problems and challenges. We'll use clear metrics to show whether adoption is delivering value.</p>
        <h3 class='govuk-heading-s'>4. Embed and grow capability</h3>
        <p class='govuk-body'>Our direct support is time-limited, but adoption continues, sustained by champions internally, ongoing community connection, and resources available through the best practice repository. As new people join or adoption expands, they benefit from what's already in place.</p>
        <p class='govuk-body'>You'll move on when champions are confident, teams have embedded new ways of working, and usage metrics show sustained adoption.</p>
      " }
    },
    {
      heading: { text: "My team is confident using AI coding tools" },
      content: { html: "
        <p class='govuk-body'>If your teams are already using AI coding tools confidently, we can help you build on what's working, connect you to the wider community, and access best practice resources.</p>
        <p class='govuk-body'>To discuss how we can support your next stage, email <a href='mailto:ai-engineering-lab@digital.cabinet-office.gov.uk' class='govuk-link'>ai-engineering-lab@digital.cabinet-office.gov.uk</a></p>
        <p class='govuk-body'>We aim to respond within 2 working days.</p>
      " }
    },
    {
      heading: { text: "Register your interest" },
      content: { html: "
        <p class='govuk-body'>To register your interest, email <a href='mailto:gdsengineeringexcellence@dsit.gov.uk' class='govuk-link'>gdsengineeringexcellence@dsit.gov.uk</a>.</p>
        <p class='govuk-body'>You should provide information about:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>your reason for wanted to work with us, such as implementing tooling within your team</li>
          <li>what AI Engineering Lab can support you with, such as knowledge-sharing, adoption support, and AI licenses</li>
          <li>the size of your engineering team and a brief description of the work they're doing</li>
          <li>your team's capacity to work with AI Engineering Lab over the next month</li>
        </ul>
      " }
    }
  ]
}) }}
