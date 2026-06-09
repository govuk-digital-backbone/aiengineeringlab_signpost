---
layout: ../_includes/custom-page.njk
title: Community events
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<p class="govuk-body">If you’re interested in learning more about AI coding tools in the public sector, there are many ways to get involved.</p>

<h2 class="govuk-heading-l">Types of events</h2>

{{ govukAccordion({
  id: "accordion-events",
  items: [
    {
      heading: { text: "Knowledge Hub" },
      content: { html: "
        <p class='govuk-body'>Join the community to share experiences, ask questions and learn from engineers in other departments using AI coding tools.</p>
        <p class='govuk-body'>The Knowledge Hub provides:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>peer-to-peer support from engineers facing similar challenges</li>
          <li>sharing of successes, failures and lessons learned</li>
          <li>access to expertise across government departments</li>
          <li>connection to champions and experienced users</li>
          <li>recordings of past events and sessions</li>
          <li>a calendar of upcoming events across the programme</li>
        </ul>
        <p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>Join the cross-government AI coding tools community</a>.</p>
      " }
    },
    {
      heading: { text: "Show and tells" },
      content: { html: "
        <p class='govuk-body'>Participating teams share their adoption journeys, challenges and successes at cross-government show and tell sessions.</p>
        <p class='govuk-body'>You'll see:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>how other teams are using AI coding tools in practice</li>
          <li>real examples of problems solved and lessons learned</li>
          <li>demonstrations of effective techniques and approaches</li>
          <li>opportunities to ask questions and discuss challenges</li>
        </ul>
        <p class='govuk-body'>Sessions are open to all participating organisations. Recordings and materials are available if you cannot attend live.</p>
      " }
    },
    {
      heading: { text: "Training workshops" },
      content: { html: "
        <p class='govuk-body'>Join facilitated workshops where you'll work on real problems with support from experienced engineers.</p>
        <p class='govuk-body'>Lunch and learns are structured sessions covering:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>basic and advanced AI tool techniques</li>
          <li>guidance on effective techniques</li>
          <li>security and safe usage</li>
          <li>role-specific guidance for different types of work</li>
        </ul>
        <p class='govuk-body'>Tech drop-ins are informal sessions where you can bring your questions and get direct support from engineers experienced with AI coding tools.</p>
      " }
    },
    {
      heading: { text: "Champion network" },
      content: { html: "
        <p class='govuk-body'>Champions help drive adoption in their departments and connect with champions across government through the cross-government community.</p>
        <p class='govuk-body'><a href='/roles/champions/' class='govuk-link'>Find out more about what champions do</a>.</p>
        <p class='govuk-body'><a href='https://forms.office.com/pages/responsepage.aspx?id=BXCsy8EC60O0l-ZJLRst2B_Gsfy5Zv9CpxUYtrs7SxxUQ0o1WUhYVE8zOUIxOUVETlRFUUM3QTQ1Ti4u&origin=lprLink&route=shorturl' class='govuk-link' target='_blank' rel='noopener noreferrer'>Register your interest</a> in becoming a champion and help shape the adoption of AI coding tools across government.</p>
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
