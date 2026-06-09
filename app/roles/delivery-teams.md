---
layout: ../_includes/custom-page.njk
title: Delivery teams
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">AI Engineering Lab is a UK government programme designed to help public sector departments adopt AI coding tools safely and effectively.</p>

<p class="govuk-body">We work with engineering teams to provide AI coding tools implementation, training, guidance, and change management support.</p>

{{ govukAccordion({
  id: "accordion-delivery-teams",
  items: [
    {
      heading: { text: "How this affects delivery work" },
      content: { html: "
        <p class='govuk-body'>AI coding tools can change how engineering teams work within agile delivery.</p>
        <p class='govuk-body'>You might see:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>faster delivery of features and user stories</li>
          <li>engineers spending more time on complex problems and less on repetitive tasks</li>
          <li>changes to sprint planning and estimation</li>
          <li>new considerations for code review and quality assurance</li>
          <li>different patterns in team capacity and velocity</li>
        </ul>
        <p class='govuk-body'><a href='/explore/how-to-adopt-ai-coding-tools/' class='govuk-link'>Understand the adoption journey</a>.</p>
      " }
    },
    {
      heading: { text: "Supporting adoption in your team" },
      content: { html: "
        <p class='govuk-body'>Delivery teams play an important role in successful adoption.</p>
        <p class='govuk-body'>We provide change management resources to help you:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>understand where your team is in their adoption journey</li>
          <li>identify and address barriers to adoption</li>
          <li>support engineers through the change</li>
          <li>measure whether adoption is delivering value</li>
        </ul>
        <p class='govuk-body'><a href='/explore/change-management/' class='govuk-link'>Find out about our people-led approach</a>.</p>
        <p class='govuk-body'>You can access change management resources, connect with delivery managers and peers in other departments, and join community events through the Knowledge Hub. You need a government or public sector email address to sign up. Personal email addresses are not accepted.</p>
        <p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>Access the Knowledge Hub</a>.</p>
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
