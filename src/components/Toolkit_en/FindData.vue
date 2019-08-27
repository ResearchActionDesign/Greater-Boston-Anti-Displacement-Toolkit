<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>In combination with organizing and storytelling, data is a powerful tool for organizing against displacement. You can use data both internally&mdash;to track and better understand changes happening in your neighborhood&mdash;and externally, to communicate with other neighborhoods, policymakers, and advocates for change.</p>
        <p>When communities begin organizing against displacement, city officials and developers often use numbers as weapons to invalidate the lived experiences of community members. For example, city officials will point to increases in the median income in an area to argue that gentrification has benefited the community, and try to shut down testimony from underserved residents who feel otherwise. Or they&#39;ll cite academic studies to support their claims and argue that community members don&#39;t have the &quot;expertise&quot; to truly &quot;understand&quot; the data.</p>
        <p>In entering this section of the toolkit, be aware of how statistics have historically been weaponized, particularly against Black and brown people, and remember that quantitative and qualitative data are just one part of the full picture of what&#39;s happening in your community.</p>
        <p>Reviewing statistics about your community can be a valuable opportunity to compare and contrast what community members inside and outside of your organization are experiencing, and contextualize those experiences alongside those of other communities.</p>
        <p>For example, if many members in your organization have faced eviction notices, reviewing the eviction rates of your community and comparing them with nearby areas can help you understand whether what&#39;s going on is a neighborhood-level increase in evictions, a city-wide issue, or part of a broader national trend. But there&#39;s also plenty that the quantitative data won&#39;t tell you—like <em>why</em> people are being evicted, how many people are being displaced through informal evictions, what the emotional impact of displacement feels like, or what strategies are successful at keeping people in their homes.</p>
        <p>Keeping in mind that statistics and data are just one part of the overall picture, this section of the toolkit will help get you started in reviewing the kinds of statistics and data available about your community. You&#39;ll identify topics to research, choose an area of analysis, and search for data. There&#39;s much more to this topic than we can cover in this section of the toolkit, so be sure to review other excellent guides on this topic, which are listed in the <router-link :to="{ name: 'Resources', params: { lang: this.$i18n.locale }}">Resources</router-link> section.</p>
      </Introduction>

      <p><b class="note">NOTE:</b> Unlike most of the rest of the toolkit, this section is written as a how-to guide rather than a facilitation plan. This section of the toolkit could be done as an activity, but you could also use this section to gather data on your own without having a separate activity.</p>
      <FacilitationGuide :toolkit="toolkit">
        <template #Title>How-To Guide</template>
        <!-- Purpose and Outcome -->
        <template #Workshop_Purpose>
          <p>To start gathering data about the impact of displacement in your community.</p>
        </template>
        <template #Workshop_Outcomes>
          <ol>
            <li>Identified issue areas or topics where data might be helpful to gather.</li>
            <li>Reviewed different geographic areas of analysis.</li>
            <li>Researched publicly available datasets to identify useful statistics.</li>
          </ol>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Working with numbers and data can bring out a lot of anxieties and insecurities for some people, and can also worsen the dynamics of racism and sexism within an organization.</li>
            <li>If you&#39;re facilitating this workshop as an activity, be on alert if certain people in the room start using their expertise or comfort with numbers to dominate the conversation.</li>
            <li>If you&#39;re facilitating this workshop as an activity, make time and space for people to share feelings, and check in often to ensure that everyone in the room is actively engaged in the conversation.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <p>In this section, we&#39;ll follow 4 steps to gather data about your community:</p>
          <ol>
            <li>Identify topics and choose questions.</li>
            <li>Define the area of analysis.</li>
            <li>Dig through publicly available data.</li>
            <li>Vet the data against your experience.</li>
          </ol>
          <p>You could do each of these steps in a small group or a larger activity. We&#39;ve included some notes about how you might facilitate each section, but because this section of the toolkit is written as more of a how-to, we haven&#39;t written out a detailed facilitation plan.</p>

          <h4 class="subcategory">Step 1: Identify Topics &amp; Choose Questions</h4>
          <p>Before you get started researching publicly available data, think about what you might be seeking. If you can start with a list of questions, it will be much easier later to sift through all the different data sources and find the specific pieces of information which will be most helpful to your organizing. This would be a great time to use some of the information gathered and ideas generated during the Mapping Power &amp; Money workshop, if you&#39;ve done that one first.</p>
          <p>If you&#39;re doing this part of the toolkit as a workshop, this section would work well as a mix of small groups, or pairs with a large group discussion. You could facilitate this section by asking people to pair off, think about experiences they&#39;ve had or issues they&#39;re concerned about, share back to the large group, cluster and prioritize issues together, and then split back up in issue groups to define specific questions.</p>
          <p>1. Start by answering 2 questions:</p>
          <ul>
            <li><em>What are some issues your community is facing around displacement?</em></li>
            <li><em>What are some things people in your organization have experienced?</em></li>
            </ul>

            <p>2. If you have a lot of different answers, you might want to cluster them into similar issue areas, like <em>evictions</em>, <em>policing, schools,</em> etc.</p>
            <p>3. For each issue you identified, try to think of questions that would help you either better <strong>understand</strong> that issue, <strong>convince</strong> others that the issue is an important one to engage, or <strong>evaluate</strong> the impact of the organizing you&#39;ve been doing.</p>
          <p>For example, if you were focusing on <em>evictions</em>, some sample questions might be:</p>
          <ul>
            <li><em>Which neighborhoods in my city have the largest number or rate of evictions?</em></li>
            <li><em>Are there specific landlords who are evicting people more often than others? If so, who?</em></li>
            <li><em>How has the eviction rate changed over time?</em></li>
            <li><em>What kind of health impacts does being evicted have?</em></li>
            <li><em>How does having to change schools due to eviction impact a student?</em></li>
            <li><em>How much does it cost the city to evict someone? Is that more expensive than paying for legal representation to stop the eviction?</em></li>
          </ul>
          <p><b class="note">NOTE:</b> This list of questions will be your starting point for gathering data, but if you have allies in your area with data expertise, reach out to ask for data help—data scientists will really appreciate that you&#39;ve taken the time to define a specific set of questions first!</p>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Step 2: Define the Area of Analysis</h4>
          <p>Now your topics and questions are defined! But before you can start researching data, you&#39;ll need to take a minute to think about areas of analysis—what <strong>places</strong> and <strong>times</strong> are you interested in learning about? The answer to this question can change, and it might be different for different topics. But having a rough idea beforehand will help narrow down your search for information.</p>
            <p>Your organization is likely working either at the neighborhood level or the city level. If you&#39;re working at the city level, you might be interested in data for the city as a whole (e.g., <em>What is the total number of people evicted in my city?</em>), or you might be interested in comparing different areas of the city (e.g., <em>Which part of the city had the most evictions?</em>). If you&#39;re just now reviewing data, we&#39;d recommend picking a single area of analysis as a starting point, whether that&#39;s your city as a whole or a particular neighborhood. Keep in mind that the smaller or more specific your geographic area of analysis is, the less likely that detailed data will be available for every topic on your list.</p>
            <p>Similarly, think about what time periods you&#39;re interested in getting data about. Has your neighborhood gone through major changes in the past few years, or has it been relatively stable for a long time? If things have changed recently, make sure to research data gathered before and after things changed, so you can track the impact of those changes—but you&#39;ll want to avoid datasets which are averaged over a time period during which those changes happened. If the neighborhood has been pretty stable for a while, you&#39;ll have more flexibility in researching data sources.</p>
            <p>If you&#39;re doing this part of the toolkit as a workshop, it&#39;d be best to facilitate this section by looking at a large, physical map together. You could then map out where each person lives and draw the neighborhoods you&#39;re interested in on the map before identifying census geographies. If you or someone else in your organization is an AAA member, that organization will mail you free, printed maps of your city on request, which are large enough to hang on the wall and great for workshops like this.</p>
            <ol>
              <li>Ask yourself: <em>What geographic areas and time periods am I interested in learning more about? You might have different answers for each topic on your list.</em></li>
            </ol>
            <p>Data about communities is usually available at different levels of geography, which are defined by the United States Census Bureau. Unfortunately, census boundaries may not correspond with your understandings of your community, so you&#39;ll need to figure out which census boundaries match best with the areas you&#39;re interested in researching. Also, each level of census geography has different data available. The table below lists some common geographic levels you may encounter when searching for data. Note that some census geographies fit together like nesting dolls (counties are made up of tracts, which are made up of block groups, which are made up of blocks), but geographies like zip codes and cities don&#39;t necessarily fit together in the same way.</p>
            <table>
              <thead>
              <tr>
                <th><strong>Name of geography level</strong></th>
                <th><strong>How big is it?</strong></th>
                <th><strong>What kind of data is usually available?</strong></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Census Block</td>
                <td>Usually the size of a city block (will be different in rural areas)</td>
                <td>Total number of residents and breakdown by race, ethnicity, age, and gender; number of houses or apartments and number of renters vs. owners.</td>
              </tr>
              <tr>
                <td>Census Block Group</td>
                <td>Several blocks combined. Usually between 600 and 3,000 people.</td>
                <td><em>All of the above, plus</em> information on income levels, rents paid, access to transportation, education levels.</td>
              </tr>
              <tr>
                <td>Census Tract</td>
                <td>Several block groups combined, containing between 1,200 and 8,000 people. Census tract boundaries usually follow features like major roads, rivers, or municipal boundaries.</td>
                <td><em>All of the above, plus</em> more accurate data on income, percentage of income folks pay for rent or mortgage, info about which industries people are employed in, and commuting times. Often city statistics on things like evictions, arrests, or new housing permitsare also available at this level.</td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>Zip codes aren&#39;t technically a geographic area, but some data sources report information by zip code anyway. Zip codes are usually larger than census tracts but smaller than municipalities.</td>
                <td>Usually Census data isn&#39;t available at this level, but other national datasets on health and evictions do report by zip code.</td>
              </tr>
              <tr>
                <td>City or Town (also un-incorporated towns, called Census Places)</td>
                <td>An actual municipality or place.</td>
                <td><em>All of the above, plus</em> much more detailed data on demographics, income, housing, employment, etc. Data on health outcomes is often available at this level. Zillow data is also available on rents and housing prices. Most statistics from city open-data portals are also available at this level.</td>
              </tr>
              <tr>
                <td>County</td>
                <td>An actual county (in some states, like Virginia, either a county or an incorporated city).</td>
                <td><em>All of the above</em>, <em>plus</em> county-to-county migration patterns (where people are moving to your community from). Sometimes more access to other national datasets on issues like health, policing, and criminal justice.</td>
              </tr>
              </tbody>
            </table>
            <ol start="2">
              <li>If you&#39;re just interested in data at the city level or above, you can stop here! But, if you&#39;re searching for neighborhood-level data, you&#39;ll need to research which census tracts and block groups make up your neighborhood. The Census American FactFinder tool is one way to find this information. Visit <a href="https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t">American FactFinder</a>, click on the &quot;Geographies&quot; tab on the left-hand side, and then click &quot;Map.&quot; You can search for an address or zoom in to find your neighborhood, then select &quot;Census Tract&quot; from the &quot;Select Geographies&quot; window on the right-hand side.</li>
            </ol>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Step 3: Dig Through Publicly Available Data</h4>
          <p>Now that you&#39;ve identified topics, chosen questions, and defined your area of analysis, you&#39;re in a good place to navigate the massive amount of publicly available data. We&#39;ve listed below some places to start.</p>
          <p>If you&#39;re doing this part of the toolkit as a workshop, this section could work well as a data &quot;scavenger hunt&quot; in which people in small groups navigate different data sources and keep track of which relevant pieces of data they can find. You&#39;d want to make sure each group had access to a laptop, a list of links to relevant data sources, and maybe a worksheet to note their findings and the source, geographic area, and time period for each piece of data. It&#39;d also be a good idea to ask groups to pay attention to how the different websites make them feel and how easy they are to use, both as a way to start a bigger discussion about who has and controls access to data, but also to remind workshop participants that if something they&#39;re encountering is confusing or hard to understand, that&#39;s not their fault, but likely because it&#39;s not presented in an accessible way.</p>
          <p><strong>Tips</strong></p>
          <ul>
            <li>As you&#39;re navigating through these sites, keep your questions and topics in mind.</li>
            <li>As you research data online, ask yourself, <em>Where did this information come from? Is the source reliable? What place is it describing? What time period is it referencing?</em></li>
            <li>Keep good notes of where each piece of data came from—copy the URL of the original site, and consider taking a screenshot or print-out so you have it for reference.</li>
            <li>For some topics, you might find that there&#39;s no data available for your community specifically, but you might be able to find data for similar communities, or for the state or nation as a whole.</li>
          </ul>
          <p><strong>Places to Research Data</strong></p>
          <ul>
            <li>Boston DataCommon Community Profiles (<a href="https://datacommon.mapc.org/#community-profiles">https://datacommon.mapc.org/#community-profiles</a>), produced by the Boston Metropolitan Area Planning Council (MAPC), lets you research a community by name and access a categorized report of key data points about that community across a variety of topics.</li>
            <li>United States Census American FactFinder Community Facts (<a href="https://factfinder.census.gov/faces/nav/jsf/pages/community_facts.xhtml">https://factfinder.census.gov/faces/nav/jsf/pages/community_facts.xhtml</a>) is a great tool for getting an overview of demographics, employment, and housing in a particular area. You can search for a county, town, city, or zip code and use the tabs on the left-hand side of the site to navigate different topics.  Please note that this site includes data from 2000 all the way to 2019, and it can be easy to inadvertently access older datasets when more updated data is available; the Census is only publishing data from 2020 and beyond on their new <a href="https://data.census.gov/">https://data.census.gov/</a> tool, which is unfortunately harder to use than the American FactFinder.</li>
            <li>Justicemap.org (<a href="https://www.justicemap.org/">http</a><a href="https://www.justicemap.org/">://www.justicemap.org/</a>) only has data up to 2016, but this volunteer-developed site is the best way to view maps of racial, ethnic, and income disparities for anywhere in the United States (search by name, and then click &quot;Go&quot;). Works best in Google Chrome.</li>
            <li>Zillow Research (<a href="https://www.zillow.com/research/data/">https://www.zillow.com/research/data/</a>) publishes time-series data about how rents and prices have changed over time in many cities and counties across the United States. You&#39;ll need to download the spreadsheet for the topic you&#39;re interested in, open it on your desktop, and then search for the name of your city to find the right row of the spreadsheet.</li>
            <li>MassBuilds (<a href="https://www.massbuilds.com/map">https://www.massbuilds.com/map</a>), produced by the MAPC, is an interactive map where you can research info about major real estate development projects across the state of Massachusetts.</li>
            <li>Google Street View (<a href="https://maps.google.com/">https://maps.google.com</a>) has a time slider which lets you view street-level photos of your neighborhood from different years, so you can research how it has changed over time. This can be a good way to visually show change in a neighborhood experiencing rapid gentrification. For example, you could use Google Street View&#39;s archive to document the number of local businesses that used to be on a gentrified street before it started changing. This feature is only available for some places. When it is, the page will have a clock icon and a date in the upper-left corner, which you can click on to change the date you&#39;d like to view.</li>
            <li>Princeton University Eviction Lab (<a href="https://evictionlab.org/">https://evictionlab.org/</a>) is an interactive mapping tool which allows you to pull up eviction rates for anywhere in the US. Please note that the data on this site was purchased from national commercial aggregators, and is not necessarily accurate for all states. A number of housing activists have expressed their frustration with Eviction Lab&#39;s extractive relationship to local organizations and the ways in which their leadership conducts business. The Anti-Eviction Mapping Project has written a pointed and thoughtful critique of this particular tool if you want to better understand the complexities around using data sources in general (<a href="https://shelterforce.org/2018/08/22/eviction-lab-misses-the-mark/">https://shelterforce.org/2018/08/22/eviction-lab-misses-the-mark/</a>).</li>
            <li>500 Cities (<a href="https://www.cdc.gov/500Cities/">https://www.cdc.gov/500Cities/</a>) is a project from the CDC that lets you view survey-based health outcomes for the 500 largest cities in the United States. However, if you have access to specific data around health outcomes (e.g., from your local Community Health Assessment), it is likely to be more accurate than 500 Cities&#39; data.</li>
          </ul>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Step 4: Vet the Data Against Your Experience</h4>
          <p>Now that you&#39;ve gathered data, reflect on what you&#39;ve found:
            <ul>
              <li><em>Are there stories from your own experience that amplify, connect with, or contradict the data you&#39;ve found?</em></li>
              <li><em>Does the data suggest new avenues of organizing, or other communities you might want to reach out to?</em></li>
              <li><em>Was the data presented in a way that felt clear and understandable to you?</em></li>
            </ul></p>
            <p>Sometimes, the data you find won&#39;t match your own knowledge and experience, which can happen for many reasons:</p>
            <ul>
              <li>Data is being presented as a median or average, which hides the experiences of people who are either below or above that average. For example, the median annual family income in Everett in 2017 was $61,190, but in reality, nearly one-third (27%) of families in Everett make less than $35,000 per year. Sometimes you can dig deeper into a particular data source to get beyond the average, but sometimes that data is not available.</li>
              <li>The dataset you have access to describes a geographic area that&#39;s too big to capture the dynamics in your particular area. This is more often a problem in smaller cities and towns, where sometimes an historically Black or Latinx or working-class neighborhood will be so small that it gets lumped in with nearby wealthier or whiter areas in statistics.</li>
              <li>The dataset you&#39;re reviewing just didn&#39;t ask the right questions, or is designed to obscure important facts. For example, the US Census unemployment rate is sometimes artificially low because it only counts people who are actively looking for work but don&#39;t have a job—not folks who have given up on finding work entirely.</li>
            </ul>
            <p>If you find yourself in any of the above situations, you might need to consider conducting your own survey to get more accurate data (some links about how to conduct a survey can be found in the links available in the <router-link :to="{ name: 'Resources', params: { lang: this.$i18n.locale }}">Resources</router-link> section).</p>
        </template>
      </FacilitationGuide>
      <AdditionalResources :toolkit="toolkit"></AdditionalResources>
    </div>
  </main>
</template>


<script>
  import ToolkitIntro from "../ToolkitIntro";
  import Introduction from "./../../components/Introduction";
  import FacilitationGuide from "./../../components/FacilitationGuide";
  import AdditionalResources from "./../../components/AdditionalResources";
  import FacilitatorImage from '../FacilitatorImage';

  export default {
    name: "workshops",
    components: {
      FacilitatorImage,
      ToolkitIntro,
      Introduction,
      FacilitationGuide,
      AdditionalResources
    },
    props: ["toolkit"],
  };
</script>