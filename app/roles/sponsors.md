---
layout: ../_includes/custom-page.njk
title: Sponsors
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">As a sponsor, your role is to shape the conditions for the successful adoption of AI coding tools in your organisation.</p>

<p class="govuk-body">You will typically:</p>

<ul class="govuk-list govuk-list--bullet">
  <li>make a case for why this change matters, and communicate it consistently</li>
  <li>build support through early engagement with technical leads, security teams and delivery managers</li>
  <li>ensure that engineers and <a href="/roles/champions/" class="govuk-link">AI champions</a> have time to learn and experiment</li>
  <li>remove organisational barriers that your <a href="/roles/champions/" class="govuk-link">AI champion</a> cannot address alone</li>
  <li>embed new ways of working into systems, processes, and culture over time</li>
</ul>

<p class="govuk-body">This role will be a good fit if you:</p>

<ul class="govuk-list govuk-list--bullet">
  <li>hold accountability for engineering or digital delivery in your organisation</li>
  <li>have the authority to make decisions about team capacity and working practices</li>
  <li>are willing and able to show visible and sustained commitment</li>
  <li>can connect the programme to your organisation's wider goals and priorities</li>
</ul>

<p class="govuk-body">Being a sponsor will require a commitment of around 2 to 3 hours per month, including a 30-minute monthly check-in with an AI Engineering Lab change manager.</p>

{{ govukAccordion({
  id: "accordion-sponsors",
  items: [
    {
      heading: { text: "Supporting adoption in your organisation" },
      content: { html: "
        <p class='govuk-body'>Our recommended <a href='/explore/change-management/' class='govuk-link'>change management framework</a> provides training and resources that can help you to create the organisational conditions to support adoption. These include:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>building a shared understanding of why adoption matters</li>
          <li>creating the conditions in which engineers can commit and engage in this change</li>
          <li>designing and communicating clear new ways of working</li>
          <li>protecting the capacity for learning and experimentation</li>
          <li>embedding changes into how your organisation operates over time</li>
        </ul>
        <p class='govuk-body'>AI Engineering Lab can also help you develop communications plans and provide templates for engaging with your teams.</p>
      " }
    },
    {
      heading: { text: "Working with your AI champion" },
      content: { html: "
        <p class='govuk-body'>As a sponsor, your most important working relationship is with your <a href='/roles/champions/' class='govuk-link'>AI champion</a>. Their role is to support the day-to-day implementation and understand how individuals are progressing, while your role is to see how organisational conditions and relationships can unblock progress, and to advocate for protected learning time.</p>
      " }
    },
    {
      heading: { text: "Guidance and resources" },
      content: { html: "
        <p class='govuk-body'>The Knowledge Hub is where you'll find change management resources, community support and peer learning opportunities. You need a government or public sector email address to sign up.</p>
        <p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>Sign up to the Knowledge Hub</a>.</p>
        <p class='govuk-body'>The AI Engineering Lab repository is the main source of guidance, templates and training materials for safely and effectively adopting AI coding tools.</p>
        <p class='govuk-body'><a href='https://github.com/govuk-digital-backbone/aiengineeringlab' class='govuk-link' target='_blank' rel='noopener noreferrer'>Visit the AI Engineering Lab repository on GitHub</a>.</p>
      " }
    },
    {
      heading: { text: "Become a sponsor" },
      content: { html: "
        <p class='govuk-body'>To register your interest in becoming a sponsor, email <a href='mailto:gdsengineeringexcellence@dsit.gov.uk' class='govuk-link'>gdsengineeringexcellence@dsit.gov.uk</a>.</p>
        <p class='govuk-body'>In your email, you must include:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>your organisation and the engineering teams you are responsible for</li>
          <li>your reason for wanting to engage with AI Engineering Lab</li>
          <li>the level of AI coding tools adoption already underway in your organisation, if any</li>
          <li>any other existing commitments or constraints that would affect your availability</li>
        </ul>
      " }
    }
  ]
}) }}
