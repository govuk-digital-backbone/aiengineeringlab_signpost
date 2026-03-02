---
layout: ../_includes/custom-page.njk
title: Champions
---

{% from "govuk/components/accordion/macro.njk" import govukAccordion %}

{{ govukAccordion({
  id: "accordion-champions",
  items: [
    {
      heading: { text: "What is a champion's role?" },
      content: { html: "
        <p class='govuk-body'>A champion works alongside AI Engineering Lab to support the adoption of AI coding tools in their organisation.</p>
        <p class='govuk-body'>Every organisation is different, so champions define their own role based on what their team needs. However, you will likely be involved with:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>modelling good practice by using AI coding tools effectively and visibly</li>
          <li>supporting your colleagues to embrace new ways of working and adopt new skills, including those with a natural resistance to change</li>
          <li>collecting evidence of impact and challenges in your organisation</li>
          <li>connecting individuals to resources and training</li>
          <li>helping build the case for continued use of AI coding tools</li>
        </ul>
        <p class='govuk-body'>Becoming a champion may be a good fit if you:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>have hands-on experience with at least one AI coding tool</li>
          <li>enjoy helping colleagues learn new technical skills</li>
          <li>are able to explain technical concepts to different audiences</li>
          <li>are curious about how AI can improve engineering workflows</li>
        </ul>
        <p class='govuk-body'>This typically involves around 2 to 4 hours per week, although the time commitment will vary depending on your organisation's size and adoption stage.</p>
        <p class='govuk-body'>We provide support, training and resources in our <a href='/explore/change-management/' class='govuk-link'>change management framework</a> to help you in this role.
        </p>    
        " }
    },
    {
      heading: { text: "Guidance and resources" },
      content: { html: "
        <p class='govuk-body'>You can access guidance on choosing the right tool for your team from the <a href='https://github.com/govuk-digital-backbone/aiengineeringlab' class='govuk-link'>AI Engineering Lab repository on GitHub</a>.</p>
        <p class='govuk-body'>Resources available include:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>implementation tools and guidance for engineers and managers</li>
          <li>security and compliance resources</li>
        </ul>
        <p class='govuk-body'>You will also receive training on our recommend change management model, resources, and access to the community of champions on <a href='https://khub.net/group/ai-engineering-lab/group-home' class='govuk-link'>Knowledge Hub</a></p>
        <p class='govuk-body'>For more complex technical challenges, we also provide escalation support, including access to our forward deployed engineers.</p>
      " }
    },
    {
      heading: { text: "Supporting individuals in your organisation" },
      content: { html: "
       <p class='govuk-body'>Not everyone adopts new tools at the same pace. Our recommended <a href='/explore/change-management/' class='govuk-link'>change management framework</a> can help you understand and support individuals at different stages of their adoption journey.</p>
        <p class='govuk-body'>You may find it useful to:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>identify where people are on their adoption journey</li>
          <li>understand what might be blocking their progress</li>
          <li>explore how to support them in their specific situation</li>
          <li>use our resources to help people at all stages of adoption</li>
        </ul>
      " }
    },
    {
      heading: { text: "Measuring impact in your organisation" },
      content: { html: "
        <p class='govuk-body'>Gathering evidence of how AI coding tools are being used can help secure continued support in your department.</p>
        <p class='govuk-body'>Our <a href='/explore/repository/' class='govuk-link'>AI Engineering Lab repository</a> includes tools and guidance to help with:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>selecting appropriate metrics</li>
          <li>data collection methods</li>
          <li>capturing team satisfaction and challenges</li>
          <li>presenting findings to different audiences</li>
        </ul>
      " }
    },
    {
      heading: { text: "Influencing senior leaders and decision-makers" },
      content: { html: "
        <p class='govuk-body'>Champions may need to support the business case for adopting AI coding tools and advocate for extra resources and support.</p>
        <p class='govuk-body'>The resources in our <a href='/explore/repository/' class='govuk-link'>AI Engineering Lab repository</a> include:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>materials for making business cases to senior leaders</li>
          <li>guidance on presenting evidence</li>
          <li>strategies for engaging leaders in your organisation</li>
          <li>practical advice and real examples from other champions</li>
        </ul>
      " }
    },
    {
      heading: { text: "Champion community and peer support" },
      content: { html: "
        <p class='govuk-body'>As a champion, you'll have the opportunity to join a growing network of AI coding champions across government, with access to peer support and community events.</p>
        <p class='govuk-body'>Through the Knowledge Hub you can:</p>
        <ul class='govuk-list govuk-list--bullet'>
          <li>learn about our recommended change management framework and access resources</li>
          <li>access a calendar of events and join training sessions</li>
          <li>connect with and learn from peers in other organisations</li>
          <li>join monthly calls and meet-ups to share successes and challenges</li>
        </ul>
        <p class='govuk-body'>You need a government or public sector email address to sign up. Personal email addresses are not accepted.</p>
        <p class='govuk-body'><a href='#' class='govuk-link'>Access the Knowledge Hub</a></p>
      " }
    },
    {
      heading: { text: "Become a champion" },
      content: { html: "
        <p class='govuk-body'><a href='https://forms.office.com/pages/responsepage.aspx?id=BXCsy8EC60O0l-ZJLRst2B_Gsfy5Zv9CpxUYtrs7SxxUQ0o1WUhYVE8zOUIxOUVETlRFUUM3QTQ1Ti4u&origin=lprLink&route=shorturl' class='govuk-link' target='_blank' rel='noopener noreferrer'>Register your interest</a> in becoming a champion and help shape the adoption of AI coding tools across government.</p>
      " }
    }
  ]
}) }}
