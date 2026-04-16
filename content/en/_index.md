---
isIndex: true
draft: false
title: Home
blocks:
  # 1. Cycling text — navy CTA hero banner
  - type: title
    background: true
    heading:
      title: "Create %s in the world one app at a time."
      text: "With the right tools, you can create amazing experiences for your users."
    cycling_words:
      - "simplicity"
      - "beauty"
      - "innovation"
    ctas:
      - text: "Start Free Trial"
        url: "/trial/"
      - text: "See Pricing"
        url: "/pricing/"

  # 2. Heading with subheading
  - type: title
    heading:
      title: "With the Right Tools, You Can Create Amazing Experiences."
      text: "Our passion for craftsmanship comes from the desire to deliver simple and beautiful experiences that drive productivity across your digital product teams, and that enable data-driven, high-performing teams across your entire organization. Built with care and attention to every small detail, from our learned expertise over the last three decades."

  # 3. Products — three cards in a row
  - type: informations
    column: 3
    items:
      - title: "Ultimate UI & Development Toolkit"
        text: "Deliver apps in half the time with Infragistics Ultimate. Hundreds of UI controls and components for every platform your team targets — web, mobile, and desktop."
        cta:
          text: "Learn More"
          url: "/products/ultimate/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Ultimate UI toolkit dashboard"
      - title: "Embedded Analytics"
        text: "Integrate beautiful, self-service dashboards directly into your applications with Reveal. Let your users explore data and make decisions without leaving your product."
        cta:
          text: "Learn More"
          url: "/products/reveal/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "Embedded analytics dashboard"
      - title: "Work Management for Modern Teams"
        text: "Slingshot is your all-in-one digital workplace — combining project management, data analytics, and team chat so your whole organisation moves faster."
        cta:
          text: "Learn More"
          url: "/products/slingshot/"
        image:
          src: "images/home/slingshot.webp"
          alt: "Slingshot work management"

  # 4. Logo grid
  - type: logos
    column: 6
    heading:
      title: "Stories That Truly Matter"
      text: "More than two million developers use Infragistics UX and UI toolkits to build world-class applications."
    items:
      - src: "images/home/logos1.jpg"
        title: "Logo 1"
      - src: "images/home/logos2.jpg"
        title: "Logo 2"
      - src: "images/home/logos3.jpg"
        title: "Logo 3"
      - src: "images/home/logos4.jpg"
        title: "Logo 4"
      - src: "images/home/logos5.jpg"
        title: "Logo 5"
      - src: "images/home/logos6.jpg"
        title: "Logo 6"
      - src: "images/home/logos7.jpg"
        title: "Logo 7"
      - src: "images/home/logos8.jpg"
        title: "Logo 8"
      - src: "images/home/logos9.jpg"
        title: "Logo 9"
      - src: "images/home/logos10.jpg"
        title: "Logo 10"
      - src: "images/home/logos11.jpg"
        title: "Logo 11"
      - src: "images/home/logos12.jpg"
        title: "Logo 12"

  # 4b. Customer stories carousel
  - type: stories-carousel
    carousel:
      params:
        type: fade
        rewind: true
        autoplay: true
        interval: 6000
        pauseOnHover: true
        arrows: false
    items:
      - title: "Cibao Meat Products Increases Cash Flow, Saves Time with Slingshot"
        text: "As a champion of Slingshot, Heinz is in the process of onboarding all the different departments within the company to create Production-Based dashboards, Active Sales Accounts KPI’s, and a Factbird Operational Dashboard."
        cta:
          text: "Read the Story"
          url: "/stories/cibao/"
        image:
          src: "images/home/cibao.jpg"
          alt: "Cibao Meat Products team collaboration"
      - title: "Scriptly Helps Pharmacies Identify Trends in Real Time with Reveal"
        text: "With Reveal built into Scriptly, pharmacies can access up-to-the-minute data, spot trends in patients, prescriptions, and customize dashboards to see relevant data."
        cta:
          text: "Read the Story"
          url: "/stories/scriptly/"
        image:
          src: "images/home/analytics-dashboard.webp"
          alt: "Scriptly pharmacy analytics"
      - title: "Bentley Nevada Modernises Industrial Monitoring with Ignite UI for Angular"
        text: "Faced with ageing desktop infrastructure, Bentley Nevada's team rebuilt their critical monitoring platform with Ignite UI for Angular in record time."
        cta:
          text: "Read the Story"
          url: "/stories/bentley-nevada/"
        image:
          src: "images/home/ui-dashboard.webp"
          alt: "Bentley Nevada industrial monitoring dashboard"

  # 5. Latest news
  - type: latest
    section: blog
    count: 3
    heading:
      title: "Ideas That Inspire. Discover What's New."
    footing:
      ctas:
        - text: "See all news and articles"
          url: "/blog/"

  # 6. Trusted partners — logo expand testimonials
  - type: logo-testimonials
    heading:
      title: "Trusted Partners & Recognitions"
    items:
      - logo:
          src: "images/home/logo-microsoft.svg"
          title: "Microsoft Gold Partner"
        description: "As a Gold Microsoft partner, Infragistics continues to be an active leader in the Microsoft developer ecosystem, providing controls, components and tools to streamline development of .NET applications on any platform or device."
        quote: "Infragistics has been a Microsoft partner for almost 3 decades. Through this close-knit relationship we've not only built technology that Microsoft has used in their products, but we've embraced and extended Microsoft platforms to deliver the tools and frameworks backed by .NET that our joint customers use as they build the next generation of enterprise applications."
        author:
          name: "Jason Beres"
          role: "Chief Operating Officer, Infragistics"
      - logo:
          src: "images/home/logo-angular.svg"
          title: "Angular Framework"
        description: "Infragistics is an active contributor to the Angular ecosystem, working directly with the Angular team at Google to contribute to the open source Angular components, while also providing the most complete commercial library of Material-based, Angular-native UI components, Ignite UI for Angular."
        quote: "In the end I was really happy with my work. I learned a lot — finding that the people responsible for the project are open to new ideas and very friendly — and the feeling that you are contributing to a project used by tens of thousands of engineers is great."
        author:
          name: "Milko Venkov"
          role: "Software Developer, Infragistics"
        cta:
          text: "Read More"
          url: "/stories/angular/"
      - logo:
          src: "images/home/logo-rutgers.svg"
          title: "Rutgers University"
        description: "Infragistics has partnered with Rutgers Division of Continuing Studies, supporting students and faculty with access to its full portfolio of UX, UI and Analytics software including Infragistics Ultimate, Indigo.Design and Reveal."
        quote: "We are thrilled to be able to offer our students, faculty and staff Infragistics software solutions that will accelerate their design, development, and collaboration efforts."
        author:
          name: "Lee Pagenkopf"
          role: "Founding Manager, Rutgers Makerspace"
        cta:
          text: "Read More"
          url: "/stories/rutgers/"
      - logo:
          src: "images/home/logo-stevens.svg"
          title: "Stevens Venture Center"
        description: "The Stevens Venture Center (SVC) is an innovative entrepreneurship ecosystem designed to connect Stevens entrepreneurs with infrastructure, resources and funding assistance so they can develop sustainable and successful commercial enterprises."
        quote: "We are grateful for the support from partners like Infragistics, which are willing to share their technology and UX/UI expertise."
        author:
          name: "Premal Kamdar"
          role: "Entrepreneur in Residence at the Stevens Venture Center"
        cta:
          text: "Read More"
          url: "/stories/stevens/"

  # 7. Webinar on-demand
  - type: editorial
    direction: rtl
    background_color: "#3F51B5"
    surtitle: "On-Demand Webinar"
    title: "Watch Our Latest Webinar On-Demand"
    text: "Stay ahead of the curve with expert insights from our latest webinar. Learn how leading teams are using Infragistics tools to build faster, smarter, and more beautiful applications — at your own pace, whenever you're ready."
    ctas:
      - text: "Watch Now"
        url: "/webinars/"
    image:
      src: "images/home/webinar.jpg"
      alt: "Watch our latest webinar on-demand"
---
