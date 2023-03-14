import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import NewsCard from './NewsCard'
import SmallNewsCard from './SmallNewsCard'

function HomeNews() {

  const slider = React.useRef(null);


  var settings = {
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <>
      {/* <!-- news & media --> */}

      <div className="news_media" id="newsmedia_section">
        <div className="container">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center text-white"> News & Insights</h5>
          </div>
          <div className="blogs_wrapper">
            <div className="blogs_wrapper_slider">

              <Slider ref={slider} {...settings}>

                <div className="slider_item">
                  <SmallNewsCard
                    link="6"
                    img="/images/blogs_image/blog1n.jpg" 
                    innerimg = "/images/blogs_image/blog1n_new.png"
                    data="<p>
                What OOH’s digital transformation means for us and the region, writes Viola‘s CEO, Ammar Sharaf
              </p>
              <p>
                There are hundreds of steps that go into the planning and buying of any given outdoor campaign, and to a
                certain extent those steps have historically been rather inefficient, for example in the way parties
                share information. However, OOH is currently undergoing a radical evolution, underpinned by the digital
                transformation taking place throughout the industry, which will dramatically change the way we look at,
                and benefit from, the process.

              </p>
              <p>
                It may seem obvious, but we need to examine the two facets of digitalisation in OOH that are the
                game-changers right now: the transformation of the workflow by automating the planning and buying of
                media, and the digitalisation of the platforms themselves, two extremely complementary developments
                which Viola Outdoor is leveraging in the region.
              </p>
              <p>First of all, then, it is important, when looking at the role that technology plays in the OOH arena to
                examine the management potential of so-called ‘big data’, primarily by making sure that the industry is
                staying up to speed with the tremendous influx of information that comes from the vast insights that we
                are able to uncover and understand based on mobile location and phone usage. It’s also important to know
                how to use the huge amount of data generated.</p>
              <p>In the currently fragmented advertising landscape, demand for data-led OOH is growing rapidly;
                advertisers want increased transparency, and more dynamic and accurate measurement and data-driven
                planning to guide their investments. Meanwhile, marketers are focused on two key areas, targeting and
                measurability, with the aim of unifying the customer journey by bringing various media channels together
                and delivering messages across multiple touchpoints. To get OOH to deliver on this omni-channel approach
                and be part of the process of customer conversion, we as media channel providers must measure up and
                deliver these important requirements.</p>
              <p>The digitalisation of the platforms enables us to look ahead from both an on- and off-line perspective.
                Still with the omni-channel consumer journey in mind, the impending demise of the third-party cookie
                will certainly mean that a bigger piece of the digital pie is available for OOH as its biggest selling
                proposition has always been its broadcast ‘one-to-many’ approach, as opposed to digital advertising,
                which looks for individual connections, where the objective is fundamentally different and more
                context-driven. Reaching consumers in real-time, when they’re in the right state of mind, used to be
                next to impossible in the one-to-many environment, but now innovative technologies have emerged to
                empower advertisers to connect with audiences in a direct, more human, memorable, and contextually
                relevant way.
              </p>
              <p>
                DOOH takes the best elements of traditional OOH and optimises them with cutting-edge technology, giving
                brands access to valuable insights and analytics beyond simple targeting. Taking things one step
                further, combining any existing first-party data with DOOH could enhance the user experience in even
                more personalised ways through which marketers can find powerful ways to engage with their desired
                audiences when and where it matters most.
              </p>
              <p>
                As regional OOH industry leaders working closely with marketers and brands, we at Viola are well
                positioned to go on this fascinating journey with our customers and spread awareness of the flexibility
                that digital platforms afford. Combining this with accurate data analytics and learned insights to
                ensure that relevant and targeted messaging is achieved in the right place, time and context, we can
                guide brands through the enhanced capabilities of the medium, maximising their effectiveness whilst
                shifting them from traditional thinking. DOOH is already altering the region’s advertising landscape,
                and as we adapt our thinking beyond the traditional boundaries we will see brands really experimenting
                and discovering what they’re capable of in this new space.
              </p>
              <p>
                We have seen the future of the outdoor space, how OOH uses software to be smarter and more agile about
                how it operates, and how it now works in tandem with other media channels to be able to digitally
                enhance and merge the broad experience of advertising, adding incredible value for the consumer while at
                the same time returning better insights and earning attribution for the advertisers; it is a very bright
                future and an exciting time for the industry, to which Viola Outdoor is proud to be a contributor.
              </p>"
                    title="OOH Guide 2022: Radical evolution"
                    slag=" – by Viola’s Ammar Sharaf"
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="7"
                    img="/images/blogs_image/blog7.webp"
                    innerimg="/images/blogs_image/blog7.webp"
                    title="Viola Outdoor Joins WOO"
                    data="<p>
                      Viola Communications’ OOH division announces membership of World Out of Home Organization, enhancing
                      global presence among professional organizations
                    </p>
                    <p>
                      Abu Dhabi, UAE, — Viola Outdoor, a division of Viola Communications, the Abu Dhabi-based media
                      communications specialists, has announced that as part of its plans to broaden its OOH marketing
                      horizons across the region, it has joined the World Out of Home Organization (WOO), the global Out of
                      Home Association which works to promote and improve the industry on behalf of its members, thus
                      reinforcing Viola’s status as the principle advertising concessionaire on the main outdoor platforms of
                      Abu Dhabi through its Viola Outdoor division.
                    </p>
                    <p>
                      The non-profit organization, which will be hosting the WOO MENA Forum Dubai this week, engages in
                      worldwide representation of outdoor advertising media companies with relevant authorities and other
                      international organizations, playing a leading role in the standardization of outdoor advertising
                      research data.
                    </p>
                    <p>
                      Membership of the body will enable Viola Outdoor to maintain its position at the forefront of the
                      digitalization of the industry in Abu Dhabi through the sharing of experiences, exchange of best
                      practices, and contributions to the setting of global standards.
                    </p>
                    <p>
                      <strong>About Us :</strong>
                    </p>
                    <p>
                      Viola Communications is a full service communications organization with a fully integrated approach to
                      transforming brands, image and corporate identities, utilizing the latest and most innovative techniques
                      and forward thinking strategies to yield successful results, applying dedication and passion to
                      creativity. The company has evolved in support of Abu Dhabi’s long-term vision to build a competitive,
                      sustainable and globally open economy, and in the process, has become part of the very fabric of Abu
                      Dhabi’s media economy. We believe in forward thinking strategies that yield successful results, applying
                      dedication and passion to creativity in support of the aspirations of our holding company, the Multiply
                      Group, in its quest to invest in and empower tech-driven, scalable businesses which demonstrate healthy
                      growth and have the potential for disrupting their industries. Viola Outdoor is Abu Dhabi’s leading
                      out-of-home advertising media provider and is changing the face of advertising in Abu Dhabi by adopting
                      digitization through innovative and dynamic approaches.
                    </p>"
                    slag=""
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="8"
                    innerimg="/images/blogs_image/blog2new_new.png"
                    img="/images/blogs_image/blog2new.png"
                    title="Beyond transformational"
                    data="<p>
                      Viola is digitising the OOH industry, one LED screen at a time, says Founder, boardmember and CEO, Ammar
                      Sharaf
                    </p>
                    <p>
                      By <strong>Ammar Sharaf</strong>, Founder, Boardmember and CEO of Viola Communications
                    </p>
                    <p>
                      The digitalisation of our industry is now an accepted reality. However, calling it ‘transformational’
                      does an injustice to the processes that have been completely revolutionised to get us to this point.
                      Technological advances are taking place at an incredible rate and amazing innovations are making a huge
                      difference to how we, as the marketing interface between companies and their clients, can exploit this
                      new technology to have a far-reaching effect. Let’s face it, we would be guilty of sleeping on the job
                      if we failed to recognise, or at least investigate, the tremendous opportunities that digitalisation can
                      bring to the table.
                    </p>
                    <p>
                      <a href=https://campaignme.com/event/campaign-saudi-briefing-2022-vision-and-ambition/>
                        Are you in Riyadh on June 14th? Do you want to meet the movers and shakers in Saudi media, marketing
                        and advertising? Would you like the latest information and insights into the industry in KSA? Then
                        join us for our first Campaign Saudi Briefing 2022: Vision and Ambition. Click here to learn more and
                        register.
                      </a>
                    </p>
                    <p>
                      While organisations and governments around the world have a digitalisation imperative that is bringing
                      about a change in the way we interact with the world online at a personal level, we are at the sharp end
                      of an industry that has always been highly visible in the public domain, a media for the masses
                      specifically designed to introduce product to customer, and in the most efficient, charismatic and
                      appealing way.
                    </p>
                    <p>
                      Which is why Viola Outdoor has recently announced a breakthrough advance in the field of outdoor
                      advertising in the capital with the imminent launch of its digital outdoor LED screens and bridge banner
                      display concepts.
                    </p>
                    <p>
                      Viola’s long-term presence on the highways and byways of Abu Dhabi has already established the company
                      as the perfect partner to lead the digital evolution of outdoor advertising, having been the principal
                      advertising concessionaire on the main outdoor platforms in Abu Dhabi since 2003, and as such possessing
                      the experience and knowledge necessary to take outdoor marketing to its next phase.
                    </p>
                    <p>
                      The DOOH LED screens will feature several unique technical designs, and will fit in with Viola
                      Communications’ existing strategic locations across Abu Dhabi, including downtown and along the city’s
                      high-visibility roads and major arteries, opening the doors to a new era of partnerships between Viola,
                      a locally grown industry leader, and its clients.
                    </p>
                    <p>
                      We will be introducing these dynamic new media display screens at appropriate sites across the city and
                      are really excited by the prospects that this form of advertising can offer, including interactivity for
                      pedestrians. These displays will totally transform the very infrastructure of media platforms across the
                      city.
                    </p>
                    <p>
                      For Viola, this is not just another project; it is company philosophy. But it’s important to note that
                      digital OOH will not replace the existing traditional formats in the short term, for which there is
                      still a lot of demand. However, we are in the process of creating a mass communication structure that
                      will be ready, willing and able to adapt to any change in the future, changes that digitalisation will
                      facilitate at the touch of a button, literally.
                    </p>
                    <p>
                      We are introducing smart network solutions that add a sophisticated backbone to the complex system of
                      connectivity, which benefits both advertiser and audience in equal parts. For example, our Totem.Lights
                      are two-sided and will have an interactive element to them, enabling residents, visitors and tourists to
                      get instant information based on their location, and the booking process for advertisers will be
                      digitised and securely accessible on-line, enabling content to be displayed on screens instantly for
                      optimum viewability.
                    </p>
                    <p>
                      Viola’s unique digital products provide a vast range of marketing options that actively support the
                      capital city’s commitment to digital transformation, reinforced by the capability of embedding
                      creativity and style in their applications coupled with high visibility, enabling a better targeted
                      reach for customers and a more refined experience for the general public.
                    </p>
                    <p>
                      Currently, posters on billboards are printed and then manually changed according to customer specs, but
                      digital displays provide the ability to bypass this process and directly change any image, whether
                      static or animated, video or graphic, instantly and remotely; adding speed, adaptability,
                      sustainability, environmental friendliness and the extra dimensions of immediacy and safety to the
                      process.
                    </p>
                    <p>
                      Digitisation offers clients the opportunity to invest in a range of marketing possibilities, whether
                      multiple versions of a single campaign across the city, multiple campaigns run on a single unit across
                      the Viola Digital Out of Home products, or a mix and match campaign that combines a full range of
                      options, and we are very excited about how these city-wide smart screens will help Viola highlight the
                      future
                    </p>
                    <p>
                      By introducing this transformative technology in Abu Dhabi, Viola Communications is actively
                      contributing to the digital evolution taking place in the UAE, in full alignment with future government
                      policy for the next 50 years and in support of the technology-driven aspirations of our holding company,
                      the Multiply Group, in a quest to invest in and empower tech-based, scalable businesses that demonstrate
                      healthy growth and have the potential for disrupting their industries.
                    </p>
                    <p>
                      If the future is digital, then Viola is the future.
                    </p>"
                    slag="– by Viola Communication’s Ammar Sharaf"
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="9"
                    img="/images/blogs_image/blog3n.jpg"
                    innerimg="/images/blogs_image/blog3n.jpg"
                    title="Viola Outdoor appoints Henrietta Shakespeare as executive growth director"
                    data="<p>
                      Ammar Sharaf, CEO of Viola Communications, the MENA-based marketing and communications solutions
                      provider, has appointed Henrietta Shakespeare as executive growth director of its OOH division.
                    </p>
                    <p>
                      <a href=https://campaignme.com/event/campaign-breakfast-briefing-adtech-and-ai-2022/>
                        Do you want to know where the future of technology in advertising is heading? Or how to incorporate AI
                        into marketing? Do you want to network with industry professionals in the fields of technology and AI?
                        Then join us for our Campaign Breakfast Briefing: Tech and AI 2022. Click here to learn more and
                        register.
                      </a>
                    </p>
                    <p>
                      Shakespeare is a specialist in the outdoor advertising industry with over 20 years’ experience,
                      including two stints at global leader Clear Channel, overseeing its MENA partnerships first and then
                      adding Asia to her remit in 2016.
                    </p>
                    <p>
                      Her role at Viola Outdoor is to ensure that Abu Dhabi’s existing OOH assets are optimised whilst at the
                      same time overseeing its transformation with the rollout of the capital’s first digital out-of-home
                      network.
                    </p>
                    <p>
                      Viola is excited about having Henrietta on board and the new opportunities their (D)OOH journey
                      presents.
                    </p>
                    <p>
                      The company says, “There is no doubt about how the innovative technology behind the DOOH infrastructure
                      is changing priorities across the advertising landscape, from both a media buyer and audience
                      perspective.”
                    </p>
                    <p>
                      “In the coming months and years, we’ll see more and more brands really experimenting to understand what
                      they’re capable of in this dynamic new space. More digitally native consumers will also benefit,
                      interacting with their surroundings in ways that are designed to both inform and entertain.” explains
                      Shakespeare.
                    </p>
                    <p>
                      Viola Communications is a MENA based investment group specializing in providing fully integrated
                      marketing and communications solutions to businesses and government departments across the region from
                      its head office in Abu Dhabi and branches in Cairo and Dubai.
                    </p>"
                    slag="by Henrietta Shakespeare"
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="10"
                    img="/images/blogs_image/blog4.jpg"
                    innerimg="/images/blogs_image/blog4.jpg"
                    title="OOH Industry Snapshot"
                    data="<p>
                      <strong>What effect is technology having on the business of OOH? </strong>
                    </p>
                    <p>
                      At Viola, we have seen a dynamic shift in client thinking brought about by new technology in OOH, in a
                      move away from location buying towards audience-based buying. With improved technology, we can develop
                      marketing strategies that use more precise data to influence audiences at several points in their
                      consumer journey. For example, digitally enabled OOH media uses accurate mobile data to recognise how
                      audiences view the content, giving each location more precise parameters to increase targeting accuracy.
      
      
                    </p>
                    <p>
                      <a href=https://campaignme.com/marcomms360/>
                        It’s here! Marcomms360 – Predictions 2023 is Campaign Middle East’s flagship annual event and a
                        must-attend for anyone who wants to be prepared for the year ahead. The full-morning conference takes
                        place on December 8 in Dubai. Book your tickets now before they sell out.
                      </a>
                    </p>
                    <p>
                      <strong>What metrics should be used to measure OOH success?</strong>
                    </p>
                    <p>
                      Precision in attribution analysis is key for OOH metrics, keeping it up to par with digital media.
                      Rather than relying on traditional reach and frequency metrics, with the right location data marketers
                      now have the ability to track and isolate OOH, directly attribute online and offline conversions,
                      measure ROI through lift analysis on engagement and compare relative performance site-by-site for both
                      digital and static OOH media.
      
      
                    </p>
                    <p>
                      <strong>What are clients asking you for?
                      </strong>
                    </p>
                    <p>
                      Top of the list now is accurate data that can be overlayed on prime location data to enable the design
                      of strategically positioned networks. We used to rely on a location’s perceived quality and status for
                      marketing, but as OOH is increasingly shifting towards audience buying, clients demand richer sources of
                      in-depth consumer data and patterns for better understanding of trends in customer movement and
                      behaviour, giving us valuable insights to inform future campaign planning.
      
      
                    </p>
                    <p>
                      <strong>How can OOH be better integrated into other brand communication channels?
                      </strong>
                    </p>
                    <p>
                      Primarily, I think it is vital to get a greater understanding of how OOH complements and augments other
                      marketing. When we look at omni-channel strategies, social, search, CTV and mobile all target in-home
                      and at-work consumers. Bringing OOH into the mix bridges the gap between audiences’ on- and off-line
                      journey. Awareness is definitely key, and now with digital Out of Home, it has never been easier to
                      demonstrate how our medium can help ‘close-the-loop’.
      
      
                    </p>
                    <p>
                      <strong>What legislation or regulation would you like to see applied to the industry?
                      </strong>
                    </p>
                    <p>
                      A greater focus on standards of safety, with the industry as a whole conducting assessments across the
                      end-to-end engineering workflow in order to raise the bar for our industry operations. I’d also like to
                      see further standardisation via the introduction of an independent industry body to facilitate greater
                      cooperation between OOH players and enable the development of shared tools, such as a common currency
                      for value equivalence, improved metrics and industry statistics.
      
      
                    </p> "
                    slag="Viola’s Ammar Sharaf"
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="11"
                    img="/images/blogs_image/blog5.jpg"
                    innerimg="/images/blogs_image/blog5.jpg"
                    title="Viola Communications to launch new
                    digital out-of-home media In Abu Dhabi"
                    data="<p>
                      Viola Communications, one of the largest communications companies in Abu Dhabi, is introducing a digital
                      out-of-home (DOOH) advertising platform offering a new and dynamic option for companies wanting to roll
                      out marketing campaigns in the UAE capital. The transformation will be happening through phases and
                      completed within the next two years, however, selected locations will be activated and ready to
                      advertise by Q3 2022.
                    </p>
                    <p>
                      Viola Communications enjoys exclusive rights to the majority of outdoor advertising spaces in Abu Dhabi,
                      including lampposts, bridge banners and bus wrapping. Under its digitalisation plan, the company will
                      introduce, over a phased approach, its DOOH platform which includes Digital Totems, Digital Bridge
                      Banners as well as other digital outdoor public notices, while the current traditional ‘out-of-home’
                      (OOH) network is to be strategically relocated to create more targeted circuits across the emirate.
                    </p>
                    <p>
                      The move offers brands greater choice in creative executions of their marketing campaigns. DOOH
                      advertising is quicker and easier to implement, and can be adjusted remotely and through automation,
                      allowing convenient creative swaps and adaptation. Digital advertising offers hyper-targeting, as well
                      as reporting on impression-level data by placement within a geographic area. The new media means will
                      also be utilized for quick government announcements and will engage pedestrians in key locations.
                    </p>
                    <p>
                      Established in 2001, Viola Communications has grown into one of the largest fully integrated marketing
                      and communications companies in Abu Dhabi, with branches in Dubai and Cairo. The company offers a wide
                      range of services including events, advertising, planning consultancy, outdoor media, production, and
                      public relations.
                    </p>
                    <p>
                      <strong>How can OOH be better integrated into other brand communication channels?
                      </strong>
                    </p>
                    <p>
                      Primarily, I think it is vital to get a greater understanding of how OOH complements and augments other
                      marketing. When we look at omni-channel strategies, social, search, CTV and mobile all target in-home
                      and at-work consumers. Bringing OOH into the mix bridges the gap between audiences’ on- and off-line
                      journey. Awareness is definitely key, and now with digital Out of Home, it has never been easier to
                      demonstrate how our medium can help ‘close-the-loop’.
                    </p>"
                    slag="Viola's digital transformation to take place in phases and be completed within the
                    next two years."
                  />
                </div>

                <div className="slider_item">
                  <SmallNewsCard
                    link="12"
                    img="/images/blogs_image/blog6n.jpg"
                    innerimg="/images/blogs_image/blog6n.jpg"
                    title="Signs of the future"
                    data="<p>
                      As Viola Outdoor upgrades its static properties to state-of-the-art digital, CEO Ammar Sharaf explains
                      what DOOH means for his clients, the public and the UAE’s capital.
                    </p>
                    <p>
                      <strong>
                        Campaign Middle East: What are the advantages of digital out-of-home (DOOH) to advertisers, the public
                        and the environment?
                      </strong>
                    </p>
                    <p>
                      Ammar Sharaf: For advertisers, one of the most significant benefits associated with DOOH advertising is
                      our ability to take advantage of geolocation data for accurate attribution, segment targeting and
                      measured evaluation, and content carried within digital formats can be tailored to specifics. For
                      example, we can remotely update data related to time-sensitive activities, the weather, and even traffic
                      conditions.
                    </p>
                    <p>
                      With better analytics applied to location and time data, advertisers have the ability to track consumer
                      movement while reaching larger audiences. Digital signage reaches consumers when they are outside and
                      not looking at their mobile phones or being distracted by other advertisers. An additional benefit to
                      the public of our two-sided LED screens is that the side facing pedestrians can be used for community
                      messaging or more in-depth content.
                    </p>
                    <p>
                      All of these facets combine to create a system today that embraces the future thinking of digital
                      technology and how it can contribute to enhancing sustainability and the green economy.
                    </p>
                    <p>
                      <strong>What percentage of Viola’s inventory is digital now, and what is your roadmap to digitalisation?</strong>
                    </p>
                    <p>
                      At the moment, we are assessing our options on the roll-out plans of our digital products in
                      collaboration with our partners in the Abu Dhabi Department of Municipalities and Transport. I have been
                      involved in the revised thinking about OOH in Abu Dhabi since the very beginning, and my experience has
                      given me the privilege of being part of the team that studied DOOH and how it will re-engineer the urban
                      infrastructure.
                    </p>
                    <p>
                      After two and a half years of consultations and planning, I concluded that the future of OOH will be
                      built on digital ‘on-ground’ foundations, allowing us to develop our ambitious plans for a roadmap for
                      the industry literally from the bottom up. We will introduce our range of products in phases, the first
                      of which should be complete within a few short weeks, and will comprise a variety of digital displays
                      that fit the fabric of Abu Dhabi’s urban landscape.
                    </p>
                    <p>
                      <strong>What are the opportunities for more interactive campaigns using DOOH?</strong>
                    </p>
                    <p>
                      I think the keyword here is flexibility. Investing in traditional advertising can be problematic because
                      to grab a customer’s attention, messages must be simple, so you put a limited amount of information in
                      one place. With DOOH, you can display several messages on one product; a retailer can display a
                      countdown to a special offer over Eid to encourage sales. However, a different range of goods may see
                      better consumer interest, so we quickly change the content to reflect that.
                    </p>
                    <p>
                      Also unique to digital is the possibility of adding elements of motion to a campaign, making the content
                      more versatile – and with two-sided LED products, the screen facing pedestrians can communicate directly
                      with passers-by on community-specific, targeted messaging or dynamic interactive content that engages
                      pedestrians. It is this fantastic flexibility that will revolutionise creativity within the industry.
                    </p>
                    <p>
                      <strong>Is it more measurable than traditional OOH?</strong>
                    </p>
                    <p>
                      Absolutely. For 20 years we have provided useful data for advertisers to work with, like our unique
                      daily effective circulation statistics, and this is enhanced with DOOH as the data is more specific and
                      quantifiable.
                    </p>
                    <p>
                      Based on our deep Abu Dhabi knowledge and industry experience, we provide advertisers with a range of
                      data on location, target audience and product, which gives us a greater return on specifics like visitor
                      demographics, accurate statistics and campaign results. This way, advertisers can accurately track their
                      campaign effectiveness and message recall.
                    </p>
                    <p>
                      Companies can access so-called ‘big data’ to find out exactly what their customers want, who their best
                      customers are and, most importantly, why people choose different products, and more, because the more a
                      company knows about its customers, the more competitive it becomes.
                    </p>
                    <p>
                      <strong>What changes in DOOH are you most excited about in the coming years?</strong>
                    </p>
                    <p>
                      With new innovations and ideas arriving almost daily, the one thing we can be sure of is that change is
                      inevitable.
                    </p>
                    <p>
                      I think that Viola’s focus in the short-term future is on digitising more OOH spaces, researching how to
                      make DOOH even more responsive and flexible, and building an effective digitised network of products
                      that can deliver certifiable results.
                    </p>
                    <p>
                      For the longer term, we have developed a series of plans that will transform the digital landscape in
                      Abu Dhabi, opening the doors to a new era of partnerships with our clients. These will include iconic
                      bespoke architecturally original devices that will add distinguished elegance and artistic taste as
                      landmark installations, upgrading and enhancing the out-of-home market.
                    </p>
                    <p>
                      Viola Digital Outdoor’s goal is to contribute to Abu Dhabi’s digital evolution. As a long-standing Abu
                      Dhabi based agency that understands the city as no one else does, we are ideally situated to make that
                      happen.
                    </p>"
                    slag="by Viola Outdoor’s Ammar Sharaf"
                  />
                </div>


              </Slider>



            </div>
            <div className="custom_arrow">
              <ul className="list-unstyled">
                <li className="prev" onClick={() => slider?.current?.slickPrev()}><img src="/images/newarrow.svg" alt="" /></li>
                <li className="next" onClick={() => slider?.current?.slickNext()}><img src="/images/newarrow-right.svg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="news_media" id="newsmedia_section">
        <div className="container-fluid">
          <div className="about_header">
            <h5 className="text-f-9 text-w-700 text-uppercase text-center text-white"> News & Insights</h5>
          </div>
          <div className="blogs_wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <NewsCard link="./inner-news-1.html" img="/images/blogs_image/blog1n.jpg" title="OOH Guide 2022: Radical evolution – by Viola’s Ammar Sharaf" />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="small_blogs">
                  <ul className="list-unstyled">
                    <SmallNewsCard link="./inner-news-7.html" img="/images/blogs_image/blog7.webp" title="V-I-O-L-A —Viola —Viola Outdoor Joins WOO" />
                    <SmallNewsCard link="./inner-news-2.html" img="/images/blogs_image/blog2.jpg" title="Beyond transformational – by Viola Communication’s Ammar Sharaf" />
                    <SmallNewsCard link="./inner-news-3.html" img="/images/blogs_image/blog3n.jpg" title="Viola Outdoor appoints Henrietta Shakespeare as executive growth director" />
                    <SmallNewsCard link="./inner-news-4.html" img="/images/blogs_image/blog4.jpg" title="OOH Industry Snapshot: Viola’s Ammar Sharaf" />
                    <SmallNewsCard link="./inner-news-5.html" img="/images/blogs_image/blog5.jpg" title="Viola Communications to launch new digital out-of-home media In Abu Dhabi" />
                    <SmallNewsCard link="./inner-news-6.html" img="/images/blogs_image/blog6n.jpg" title="Signs of the future, by Viola Outdoor’s Ammar Sharaf" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomeNews