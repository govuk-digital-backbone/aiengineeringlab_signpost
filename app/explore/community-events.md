---
layout: ../_includes/custom-page.njk
title: Community events
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

<h2 class="govuk-heading-l">Types of events</h2>

{{ govukAccordion({
  id: "accordion-events",
  items: [
    {
      heading: { text: "Knowledge Hub" },
      content: { html: "<p class='govuk-body'>Join the community to share experiences, ask questions and learn from engineers in other departments using AI coding tools.</p><p class='govuk-body'>The Knowledge Hub provides:</p><ul class='govuk-list govuk-list--bullet'><li>peer-to-peer support from engineers facing similar challenges</li><li>sharing of successes, failures and lessons learned</li><li>access to expertise across government departments</li><li>connection to champions and experienced users</li><li>recordings of past events and sessions</li><li>a calendar of upcoming events across the programme</li></ul><p class='govuk-body'><a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link' target='_blank' rel='noopener noreferrer'>Join the cross-government AI coding tools community</a></p>" }
    },
    {
      heading: { text: "Show and tells" },
      content: { html: "<p class='govuk-body'>Participating teams share their adoption journeys, challenges and successes at cross-government show and tell sessions.</p><p class='govuk-body'>You'll see:</p><ul class='govuk-list govuk-list--bullet'><li>how other teams are using AI coding tools in practice</li><li>real examples of problems solved and lessons learned</li><li>demonstrations of effective techniques and approaches</li><li>opportunities to ask questions and discuss challenges</li></ul><p class='govuk-body'>Sessions are open to all participating organisations. Recordings and materials are available if you cannot attend live.</p>" }
    },
    {
      heading: { text: "Training workshops" },
      content: { html: "<p class='govuk-body'>Join facilitated workshops where you'll work on real problems with support from experienced engineers.</p><p class='govuk-body'>Lunch and learns are structured sessions covering:</p><ul class='govuk-list govuk-list--bullet'><li>basic and advanced AI tool techniques</li><li>best practices</li><li>security and safe usage</li><li>role-specific guidance for different types of work</li></ul><p class='govuk-body'>Tech drop-ins are informal sessions where you can bring your questions and get direct support from AI-trained engineers.</p>" }
    },
    {
      heading: { text: "Hackathons and roadshows" },
      content: { html: "<p class='govuk-body'>Take part in hands-on coding sessions where teams solve real challenges using AI tools.</p><p class='govuk-body'>Hackathons are intensive multi-day events where you'll:</p><ul class='govuk-list govuk-list--bullet'><li>work on actual problems from your department</li><li>collaborate with engineers from other organisations</li><li>get support from technical leads and champions</li><li>share results and learn from other teams</li></ul>" }
    },
    {
      heading: { text: "Champion network" },
      content: { html: "<p class='govuk-body'>Champions help drive adoption in their departments and connect with champions across government through the cross-government community.</p><p class='govuk-body'><a href='/roles/champions/' class='govuk-link'>Find out more about what champions do</a></p><p class='govuk-body'><a href='https://forms.office.com/pages/responsepage.aspx?id=BXCsy8EC60O0l-ZJLRst2B_Gsfy5Zv9CpxUYtrs7SxxUQ0o1WUhYVE8zOUIxOUVETlRFUUM3QTQ1Ti4u&origin=lprLink&route=shorturl' class='govuk-link' target='_blank' rel='noopener noreferrer'>Register your interest</a> in becoming a champion and help shape the adoption of AI coding tools across government.</p>" }
    },
    {
      heading: { text: "Register your interest" },
      content: { html: "<p class='govuk-body'>To register your interest, email <a href='mailto:ai-engineering-lab@digital.cabinet-office.gov.uk' class='govuk-link'>ai-engineering-lab@digital.cabinet-office.gov.uk</a></p><p class='govuk-body'>You should provide information about:</p><ul class='govuk-list govuk-list--bullet'><li>What you're hoping to achieve by working with AI Engineering Lab</li><li>What AI Engineering Lab can support you with, for example knowledge sharing, adoption support, or AI licenses</li><li>The size of your engineering team and a brief description of the work they're doing</li><li>Your team's capacity to work with AI Engineering Lab over the next month</li></ul>" }
    }
  ]
}) }}
