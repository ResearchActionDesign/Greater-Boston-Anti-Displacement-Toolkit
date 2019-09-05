<template>
  <main class="workshop">
    <section aria-label="overview" class="overview" :style="{'--workshop-color': toolkit.color }">
      <header>
        <h1 :style="{ color: toolkit.color }">{{toolkit.name}}</h1>
        <p class="subtitle">{{toolkit.question}}</p>
      </header>
      <img :src="require(`@/assets/${toolkit.link}.png`)" class="workshopLogo_large" :alt="toolkit.altText" />
<!--      TODO change to vimeo embed link-->
      <p v-if="toolkit.num" :style="{ color: toolkit.color }" class="bold">{{$t('strings.workshop')}} {{toolkit.num}}</p>
      <div class="tileIcons">
        <a :href="toolkit.print" target="_blank" :aria-label="`${$t('print')} ${toolkit.name}`" @click.stop style="justify-self: end">
          <svg class="icon" width="24px" height="24px" :alt="`${$t('print')} ${toolkit.name}`">
            <use xlink:href="./../../assets/printer.svg#printer"></use>
          </svg>
        </a>
        <a :href="toolkit.edit" target="_blank" :aria-label="`${$t('edit')} ${toolkit.name}`" @click.stop style="justify-self: start">
          <svg class="icon" width="24px" height="24px" :alt="`${$t('edit')} ${toolkit.name}`">
            <use xlink:href="./../../assets/pencil.svg#pencil"></use>
          </svg>
        </a>
      </div>
    </section>
    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <span slot="title">Discussion & Action Guide</span>
        <p>Media and art are great organizing tools for understanding and fighting displacement in our communities. Film can be used in organizing to tell a story and call attention to a problem, expand and shift dialogues by unpacking and examining different narratives and experiences, mobilize communities for action, and influence policy change.</p>
        <p><strong>Desplazada</strong> is set along the lower Mystic River watershed, which connects the communities of Chelsea, Everett, and East Boston to the generations-old cycles of dispossession, industrial pollution, displacement, and economic injustice in the region.</p>
        <p>In Everett, residents have not been able to access the waterfront for many years, due to a long history of industrialization and contamination. Until recently, many Everett residents were not even aware of the river. Built on a former Monsanto site, Encore Boston Harbor Casino opened in June 2019. During the planning stage, the site was marketed to residents as a solution to finally cleaning up the contaminated land, allowing access to the river, and bringing much-needed jobs to the area.</p>
        <p>Chelsea is surrounded by three waterways: the Island End River, Chelsea Creek, and Mill Creek; meanwhile, many in Chelsea still don&#39;t know that the area is surrounded by water, or considered a &quot;waterfront community.&quot; Similarly, Chelsea&#39;s waterfront has been inaccessible to most for generations—including Chelsea Creek, which has been designated as a DPA (Designated Port Area), prioritizing industrial usage for water-dependent industries.</p>
        <p>While Chelsea provides regional and national industrial benefits—including storage for jet fuel, home heating fuel, and road salt used in hundreds of communities across the region—its residents have also sacrificed their public health and access to such valuable resources. After decades of working to improve  quality of life in the community and making the city a healthier and cleaner place to live, many of Chelsea&#39;s most vulnerable residents are being displaced.</p>
        <p><strong>Desplazada</strong> depicts our history and current-day causes of displacement occurring in these communities (and beyond) along this same waterfront. The film was created as an organizing tool to raise the level of empathy and consciousness of displacement that then leads to community action. This film and action guide can be used to:</p>
        <ul>
          <li>Create opportunities for critical dialogue about displacement and its community impact.</li>
          <li>Examine environmental and housing injustices.</li>
          <li>Think critically about strategies to fight for environmental justice and end displacement.</li>
        </ul>
        <p>The facilitation guide below outlines steps for screening the film and offers guiding questions to engage participants in a conversation about the intersecting forces of displacement and environmental injustice. This guide is intended to be adapted as needed to fit the needs of your community and audience.</p>
      </Introduction>
      <FacilitationGuide :toolkit="toolkit">
        <div slot="Workshop_Purpose">
          <p>To open up space for dialogue and reflection about the lived experiences of gentrification, environmental injustice, and displacement.</p>
          <p>To ask open-ended questions about the root causes of environmental injustice, resource distribution, land use, and property ownership.</p>
          <p>To inspire inquiry around the relationship of people to nature, housing policies, economics, history, injustices, and trends normalized in this present moment.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <p>These should be set by the organizers and facilitators based on &quot;what you want to know/have at the end&quot; of the film screening.</p>
        </div>
        <template slot="Whom_to_Invite">
          <p>Whom you invite (or exclude) will largely depend on the purpose (<em class="italic">Why do it?</em>) and outcomes (<em class="italic">What do you want to know/have at the end?</em>) of organizing a screening and conversation in your community.</p>
          <p>Once this has been identified, then ask:</p>
          <ul>
            <li><em>Who could help fulfill this purpose?</em></li>
            <li><em>Who is most relevant for this activity?</em></li>
            <li><em>Who might threaten the purpose?</em></li>
          </ul>
          <p>For example: If bringing in new members to your coalition or network or building relationships and collaborating with allies around long-term issues of displacement is your goal, you could invite representatives from community organizations who share similar values, goals, and are working in the same communities. If you want to recruit and expand your membership base, invite residents experiencing displacement and gentrification. At the end of the screening, you might ask participants to sign up for your Listserv, attend a meeting or community action, or become a member of your coalition, network, or organization.</p>
        </template>
        <template slot="Materials_and_Preparation">
          <ul>
          <li>Identify 1-2 facilitators and assign roles for the discussions, including 1 note taker and 1 timekeeper. If 2 facilitators are present, each one could support the other and the audience if the discussion becomes emotional.</li>
          <li>Print out the brief introduction of the film to share with participants at the start of the screening.</li>
          <li>Identify key questions you plan to ask the audience based on who is attending, size and diversity of the group, and desired outcomes for the conversation.</li>
          <li>Consider printing out and distributing questions for the audience to reference during the discussion.</li>
          <li>Make sure you have (and test how to set up) all A/V equipment (e.g., projector, laptop, screen).</li>
          <li>The film is available at <a href="https://greaterbostontoolkit.org/en/film">https://greaterbostontoolkit.org/en/film</a>. Each partner organization also has a copy of the film available for use.</li>
          <li>If conducting the optional activity, you will need materials (paper, colored markers/pens, sticky notes) for participants to create their own future timelines.</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>The film can be screened in organizations, community gatherings, meetings, forums, conferences, and even in your own home!</li>
            <li>The film is approximately 14 minutes in length. The discussion and questions can be modified based on screening goals, audience, and time available.</li>
            <li>Watch the film at least once—preferably with others—before you facilitate a community dialogue, which will help prepare you for your own reactions to and reflections of the film and how they compare to others.</li>
            <li>Review the background and context of the film, the cast (in order of appearance) noted in the credits of the film, and the permissions to prepare for any questions about footage presented in the film.</li>
            <li>Encourage the use of &quot;I&quot; when asking the audience to reflect and respond to questions.</li>
            <li>Create a safe space for the audience and have a public discussion about the impact of the film and their reflections. This is especially true if you know your audience members will have different viewpoints and perspectives on the issue. (Review the modified Community Agreements adopted from <a href="http://aorta.coop/">Aorta</a> below.)</li>
            <li>Be prepared for different emotional responses and perspectives. Use the goals of the screening and Community Agreements (or other tools used to create a safe space) to make room for differences and the re-grounding of conversations as needed.</li>
          </ul>
          <h3>Community Agreements</h3>
          <table class="community-agreements">
            <tbody>
            <tr>
              <td>ONE DIVA, ONE MIC<br><br>UNA DIVA, UN MICRÓFONO</td><td>Please, only 1 person speak at a time. (For those who need more time to process their words, or are less comfortable requesting airtime in a conversation, it could be useful to ask people to leave the space in between speakers.)</td>
            </tr>
            <tr>
              <td>NO ONE KNOWS EVERYTHING; TOGETHER WE KNOW A LOT<br><br>NADIE SABE TODO; JUNTOS SABEMOS MUCHO</td><td>This means we all get to practice being humble, because we have something to learn from everyone in the room. It also means we all have a responsibility to share what we know, including our questions, so that others may learn from us.</td>
            </tr>
            <tr>
              <td>MOVE UP, MOVE UP<br><br>MOVÁMONOS ROLES</td><td>If you&#39;re someone who tends to speak less, please move up into a role of speaking more. If you tend to speak a lot, please move up into a role of listening more. This is a twist on the more commonly known &quot;step up, step back.&quot; The &quot;up/up&quot; confirms that in both experiences, growth is happening. (You don&#39;t go &quot;back&quot; by learning to be a better listener.) Saying &quot;move&quot; instead of &quot;step&quot; recognizes that not everyone can step.</td>
            </tr>
            <tr>
              <td>WE CAN&#39;T BE ARTICULATE ALL THE TIME<br><br>NO LOGRAMOS ARTICULAR TODO EL TIEMPO</td><td>Often, people feel hesitant to participate in a workshop or meeting for fear of &quot;messing up&quot; or stumbling over their words. We want everyone to feel comfortable participating, even if you can&#39;t be as articulate as you&#39;d like.</td>
            </tr>
            <tr>
              <td>BE AWARE OF TIME<br><br>SER CONSCIENTES DEL TIEMPO</td><td>This is helpful for your facilitator, and helps respect everyone&#39;s time and commitment. Please come back on time from breaks, and refrain from speaking in long monologues.</td>
            </tr>
            <tr>
              <td>BE CURIOUS<br><br>SER CURIOSOS</td><td>We make better decisions when we approach our problems and challenges with questions (&quot;What if we... ?&quot;) and curiosity. Allow space for play, curiosity, and creative thinking.</td>
            </tr>
            <tr>
              <td>ANYTHING TO ADD?<br><br>ALGO MÁS?</td><td></td>
            </tr>
            </tbody>
          </table>
          <p><strong>NOTE:</strong> A few community agreements that participants often bring up that we don&#39;t tend to use or bring with us include: &quot;assume best intentions&quot; and &quot;default to trust.&quot; We don&#39;t use these agreements because when someone is unable to do this (say they&#39;re feeling untrusting of someone, or unsafe), having a community agreement telling us to do so isn&#39;t going to change anything. Put short, these agreements aren&#39;t always possible, especially when we take into consideration that people have been harmed by sexism, racism, homophobia, transphobia, and classism. Instead, we offer, &quot;we can&#39;t be articulate all the time,&quot; &quot;be generous with each other,&quot; and &quot;this is a space for learning,&quot; which capture the spirit of building up the necessary tools to take care of and protect themselves/ourselves.</p>
        </template>
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <Instructions>The background and context for the film is provided to help the facilitator guide a discussion about the film. Use all or pieces of this information to create an invitation for the screening, introduce the film at an event, or to support open discussion.
            <p><strong>Background and Context:</strong> The relationship between environmental degradation, selective &quot;green&quot; rehabilitation, extractive development, gentrification, and cycles of displacement is not often explicitly named. Movements that fail to account for these interlinked, dynamic, and historic forces may be tempted to legitimize unjust land-use policies that trade healthy, livable environments for short-term affordable housing. In our scarcity economy, we learn to fight over scraps. We witness this play out when we hyper-localize our concerns, caring more about  improving our own community than considering the runoff effects of our decisions on neighboring communities—this kind of thinking is historically rooted in a pervasive culture of settler-colonial resource extraction and land theft in the US that determines individual life chances and policy decisions.</p>
            <p>On the flip side, many successful, collective efforts at community restoration of poisoned and abandoned landscapes have been co-opted by capitalism. Today, environmental remediation booms as a commercial enterprise, facilitating the growth of for-profit, &quot;green-lining&quot; industries and subsequent waves of white resettlement. It is clear that ecological clean-up; post-industrial, green spaces; and the very idea of enjoying these spaces are now available only to those who can literally afford that privilege. While the specifics of the aesthetics and terminology might be new, this classed and racialized double standard is not.</p>
            <p>What kind of world do we deserve? How does our relationship to the earth and its elements define our experience of self, community, identity, and history? What does home mean? Our lives are contoured by migration and transience, inheritance, connection, and adaptation. Our different histories and possible futures vie for resolution on this stolen land.</p>
            <p><strong>Desplazada</strong> asks these questions.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <Instructions>The discussion questions outlined below are organized by key themes presented in the film. Start by asking the general opening discussion questions to begin the conversation before diving into any specific themes. Pick and choose which specific, thematic questions to ask depending on the conversation, audience, and goals for the viewing and discussion. The activity following the discussion questions is optional.
            <p>Ask participants to share their reflections and comments.</p>
            <p><strong>General Opening Discussion</strong></p>
            <ol>
              <li>How did it feel to watch this film? Pick a sequence that stood out to you and elaborate on your experience of watching it.</li>
              <li>What are some of the forces this community is coming up against?</li>
              <li>In any given place, people can experience and witness the same things from different vantage points. Who are the different stakeholders in the film? What are their views or interests demonstrated throughout the film?</li>
            </ol>
            <p><strong>Environmental Justice</strong></p>
            <ol start="4">
              <li>What images of the landscape are being depicted during this opening segment? What do they convey to you? How might they relate to the names of the companies being named?</li>
              <li>Who do you think wrote the letter and why? Who do you think received the letter? What does the letter tell (or not tell) you about the situation being explored in the film? What is the situation being explored?</li>
              <li>What do you think is the purpose of the last scene? How does it compare to other segments of the film? What does it make you think about or feel? What is the relationship between the people shown, the land, river, and human-constructed development in this scene?</li>
            </ol>
            <p><strong>Historical Context of Development and Displacement</strong></p>
            <ol start="7">
              <li>What is the significance of the video footage from 1998? How does this new experience compare to past moments in history? How were things approached in the past vs. today?</li>
            </ol>
            <p><strong>Intersection of Race and Class, Environmental Justice, and Displacement</strong></p>
            <ol start="8">
              <li>The person referring to &quot;white tree-hugger environmentalists&quot; asked another, &quot;What are you doing about your trees, your creek?&quot; The speaker answers, &quot;We were just trying to hold onto open space that was being taken away.&quot; What is the conflict that the person speaking is describing? Can you relate to that conflict in the way it is framed?</li>
              <li>&quot;The very same people who have worked so hard to clean up our communities are not going to be able to enjoy them, because literally they are being displaced right now,&quot; the speaker concludes. What does this statement make you think of, and how do you relate to this?</li>
              <li>Who is being depicted in this sequence, and how do you think they relate to the larger story of environmental injustice and displacement?</li>
              <li>Do these speakers remind you of anything or anyone in your life? Do they look like you or people who live in your community? Do the things they mention make you feel any particular way? Do you agree or disagree with what they say? Who do you think their audience is?</li>
              <li>How does the example of &quot;walking through the city and smelling chocolate because there&#39;s a chocolate factory&quot; seem to relate to the industrial conditions noted in the film? Do you think this analogy is useful or appropriate to make? Why or why not?</li>
              <li>What do you think the images and sounds below suggest of the film&#39;s point-of-view?</li>
              <li>&quot;We think it&#39;s much more exciting to be playing basketball as an oil tanker passes within feet,&quot; says one of the speakers.</li>
              <li>&quot;That&#39;s the kind of moments we&#39;re trying to cultivate in the work,&quot; followed by a frozen image of kids on a playground near an industrial site. Loud machines groan while children shout and shoot hoops.</li>
            </ol>
            <p><strong>Economic Justice and Displacement</strong></p>
            <ol start="16">
              <li>&quot;Wynn Resorts has promised 4,000 temporary, construction-related jobs during the time of construction, and thousands of jobs in the hospitality industry,&quot; the speaker says. What do you make of this argument? If you are familiar with the situation of Wynn Resorts (now Encore), what does this segment make you think or feel?</li>
              <li>Do you think that, as the mayor said here, that Encore has &quot;returned the Mystic to the people of Everett?&quot; Why or why not?</li>
              <li>How does the hotel and clean-up relate to the creek/river, the region overall, and the themes of environmental injustice and displacement? Why do you think this segment was included in the film?
              </li>
              <li>Over the images of an industrial site, a woman says, &quot;If you don&#39;t have money, then you are on your own. You live however society deems you have to live. But if you have money, you can move out. You can go to a different place. You can choose how and where you live. But for some of us, that is not an option.&quot; How do you relate to her statement? How do you think her position is similar to or different from the architects who talked about how exciting it is to play basketball feet from where an oil tanker passes? How do you think her statement might relate to the history and current work of environmental justice activists mentioned earlier?</li>
              <li>The woman standing in front of her house talks about the meaning of home ownership for herself, and the threat of gentrification and proliferation of investor-owned condominiums. Does she remind you of anything or anyone in your life? Does she look like you or people who live in your community? Do the things they mention make you feel any particular way?</li>
            </ol>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="3"/>
          <h4>Activity: Future Timeline (optional)</h4>
          <Instructions>This activity uses the film to help participants imagine how the next 20-30 years would take shape in the community. Collectively, participants could figure out how to envision and build transformative possibilities for a just and ecologically healthy world.
            <ul>
              <li>Ask participants to design their own future timeline for the next 20-30 years by thinking about the film in context with any information or knowledge brought from the neighborhoods where they organize.</li>
              <li><p>Ask participants to take approximately 10 minutes considering the following:</p>
                <ul>
                  <li><em>How might we get to our most desired futures?</em></li>
                  <li><em>What small steps can we take now, collectively and individually, to build toward that future?</em></li>
                  <li><em>Feel free to draw inspiration from the past, but don&#39;t let history limit your creativity and imagination.</em></li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>After 10 minutes, ask participants to share back their future timelines with the larger group.</li>
            </ul>
            <ul>
              <li>Once all of the groups have shared, reflect with participants on the futures they each imagined in the activity by asking:
              <ol>
              <li><em>What inspired or excited you?</em></li>
              <li><em>What steps could we take or explore further?</em></li>
              </ol>
              </li>
            </ul>
          </Instructions>
        </template>
      </FacilitationGuide>
      <TakingAction :toolkit="toolkit">
        <p>Communities across the Boston Area are organizing to protect the health and lives of all residents, including the most vulnerable populations: im/migrants, communities of color, underserved communities, youth, and elders. The struggle for environmental justice and improved public health is inextricably linked to the struggle against displacement and for a right to self-determination. Front-line communities—those most impacted by the climate crisis and everyday environmental hazards—are at the forefront of this struggle in our region and across the country. Rise up in solidarity with these communities fighting against displacement and support grassroots efforts for environmental justice and improved public health.</p>
        <p>To find more resources or get in touch with and support communities on the ground in Chelsea and Everett, visit the Greater Boston Anti-Displacement Toolkit website (<a href="https://greaterbostontoolkit.org">https://greaterbostontoolkit.org</a>) for more information.</p>
      </TakingAction>
      <AdditionalResources :toolkit="toolkit"></AdditionalResources>
      <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Filming Permissions</h2>
      <p>The following permissions are provided as an informational resource and can be utilized at the discretion of the facilitator.</p>
      <table>
        <thead>
        <tr>
          <th><strong>Airspace</strong></th>
          <th><strong>Property</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
      <ul>
        <li>The drone videographer is an FAA- licensed drone pilot (Part 107 is the certification), meaning they are legally entitled and authorized to operate a drone. It&#39;s the operator&#39;s responsibility to fly safely and in an authorized manner.</li>
        <li>The FAA drone certification minimizes liability and protects civilians during flights, and reduces risks involved with flying.</li>
        <li>The Boston area is a &quot;Class B&quot; airspace, which means the drone operator needs to authorize any drone mission via a phone app that requires them to input credentials.</li>
        <li>The drone has software geo-fencing installed, meaning that it literally will not leave the ground when too close to an airport, or when in a no-fly zone.</li>
        <li>Airspace is regulated by the FAA but no one owns it.</li>
        <li>We did not encounter any &quot;no-fly&quot; zones while filming, and took precautions to not pass any major roadways.</li>
      </ul>
          </td>
        <td>
          <ul>
        <li>Produced as an outdoor film.</li>
        <li>During the course of filming, we did not trespass on any property with the drone, not even to take off or land. <em>Note:</em> If property is viewable from a public sidewalk or area, it is generally considered filmable.</li>
        <li>Film clips of The Eddy are from a <a href="https://www.youtube.com/watch?v=JDofnB_O7YU">promotional video</a> they posted on YouTube.</li>
        <li>Likewise, <a href="https://www.youtube.com/watch?v=OIg9nTmICpc">audio from the news story</a> about Encore would be considered fair use.</li>
      </ul>
        </td>
        </tr>
        </tbody>
      </table>
      <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Film Acknowledgments &amp; Credits</h2>
      <p>This film is a collaboration funded by The Surdna Foundation, in partnership with the Community Innovators Lab (Co-Lab) at the Department of Urban Studies and Planning at the Massachusetts Institute of Technology, Research Action Design, GreenRoots, and Everett Community Health Partnership.</p>
      <p>Produced and Directed by: Puck Lo</p>
      <p>Cast (In Order of Appearance): Grace Muwina, Damali Vidot, Mayra Romero, Mayra&#39;s son Bryant Romero, kids in playground, Jeffry Ramos, Tiffany Enriquez, Ericksson Enriquez</p>
      <p>Director of Photography: Puck Lo</p>
      <p>Drone Videographer: Dane Christensen</p>
      <p>Editor(s): Puck Lo</p>
      <p>Music: Stefan Christoff</p>
      <p>Special Thanks: Maria Belen Power, Kathleen O&#39;Brien, Andres Del Castillo, Indira Garmendia Alfaro, Sarah Levy, Sarah Gay, Justin Steil, Lad Dell, Amber Christofferson, Deanna Moran, Matt Spurlock, Hana Georg, Kim Garcia, Francine Harris, R.J. Lozada, Paloma Martinez, Maris Curran, Gael Gundin Guevara, Elivia Shaw, Caroline Rivas, Tim Stallmann, Taylor Cain, Andrew Binet, Taina McField</p>
    </div>
  </main>
</template>

<script>
  import Introduction from "./../../components/Introduction";
  import FacilitationGuide from "./../../components/FacilitationGuide";
  import Instructions from "./../../components/Instructions";
  import AdditionalResources from "./../../components/AdditionalResources";
  import FacilitatorImage from '../FacilitatorImage';
  import TakingAction from "./../../components/TakingAction";

  export default {
    name: "Film",
    components: {
      Introduction,
      FacilitationGuide,
      FacilitatorImage,
      Instructions,
      TakingAction,
      AdditionalResources
    },
    data() {
      return {
        toolkit: this.$t('filmToolkit'),
      };
    },
  };
</script>
