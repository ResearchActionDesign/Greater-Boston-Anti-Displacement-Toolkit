<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Community organizing strategies and tactics can take all kinds of formations, from the more traditional door knocking or setting up information tables at events to organizing community photo tours. This activity draws on community assets and identifies local, cultural organizing strategies and tactics to prevent displacement. Creative and artistic strategies and tactics can be used to:</p>
        <ul>
          <li>bring together art and community organizing</li>
          <li>mobilize and tell the story of displacement, and</li>
          <li>help shift dialogues and policy.</li>
        </ul>
        <p>It is an opportunity to engage local artists and culture bearers to explore more creative and artistic modalities and engage community leaders centering unconventional ways of advancing community dialogue and action. Although grounded in creative practices, this activity requires the same commitment to rigor, research, and attention to detail as more traditional policy or data-driven activity sessions.</p>
        <p>The facilitation guide below outlines how to conduct this activity, and is intended to be adapted to fit your community needs.</p>
      </Introduction>
      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <p>To propose model strategies and tactics that promote inclusive community engagement and stop harmful practices and policies that displace communities.</p>
            <p>To engage communities in a creative brainstorm that allows them to explore multi-disciplinary, cultural organizing strategies for addressing displacement.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>A shared understanding and illustration of how displacement has impacted our communities.</li>
            <li>Stakeholders create community-driven strategies and actions for making displacement visible across the city.</li>
            <li>Participants will discuss cultural and artistic strategies that have been successful and unsuccessful in previous campaigns.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Consider including local artists and culture workers at the top of this session, so that they can contribute to the full design of identifying community strategies and tactics. This might include:</p>
          <ul>
            <li>Community members, community organizers, locally engaged politicians, and small businesses.</li>
            <li>Artists of all disciplines, including (but not limited to) visual and graffiti artists, dancers, singers, DJs, puppeteers, etc.</li>
            <li>Journalists and storytellers may provide insights on actions that can be used for high visibility and impact.</li>
            <li>Ideally, there would be a minimum of 6 participants to have a diverse representation of ideas to share and discuss.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identify 2 facilitators and assign roles for the session, including 1 note taker and 1 timekeeper. If 2 facilitators, the 2 can rotate roles—e.g., 1 person facilitates and the other takes notes and keeps time.</li>
            <li>Flip-chart paper</li>
            <li>Print copies of the <a href="/handouts/Design-Sprint.pdf" target="_blank">Design Sprint activity sheet</a>.</li>
            <li>Art Supplies - markers, colored pencils, crayons, etc.</li>
            <li>Sticky notes</li>
            <li>Packs of colorful dots that contain at least 3 different colors</li>
            <li>Masking tape or painter&#39;s tape</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Play music during the Design Sprint activity.</li>
            <li>Emphasis should be placed on a shared sense of community ownership, agency, and belonging.</li>
            <li>Invite participating artists to move beyond their core discipline and embrace a full range of creative tools when exploring actions that highlight the plight of displacement.</li>
            <li>All participants are creators! Each participant has a unique perspective, cultural experience, and vision for representation of social issues. Strive to reduce barriers to participation by honoring and validating each suggestion.</li>
            <li>Consider translation needs and language accessibility of the intended audience.</li>
            <li>Have fun!</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 1: Setting Up &amp; Introductions (10 min)</h4>
          <Instructions>The purpose of this exercise is to identify all of the ways the group has used its agency to organize and advocate for change in their community. The next activity allows participants to create a shared definition and understanding of the term &quot;community organizing&quot; and generate a list of past and present community-organizing activities they are/have been engaged in.
          <p>Begin the session in a circle. Facilitators should begin with an opening greeting and set the tone for the day&#39;s session. If the workshop is part of a series, take a moment to remind the group of the previous sessions and content covered and then forecast what comes next in the series. Transition into the session with introductions through the proposed icebreaker activity or an exercise of your choice. The ultimate goal of this session is to generate tactics and tools that mix arts and community organizing.</p>
          <p>Ask participants to introduce themselves: name, and one thing they love about their community.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 2: Community Organizing Web (7 min)</h4>
          <Facilitator><span class="instructions">Ask participants to share their thoughts and ideas in response to the following questions</span>
            <ul>
              <li>What comes to mind with the term &quot;community organizing&quot;?</li>
              <li>In what ways do you currently organize members of your community? (Story circles, door knocking, community murals, etc.)</li>
            </ul>
            <p class="instructions">Jot all suggestions down on a sheet of flip-chart paper. Notice whether examples that come up in the exercise include acts of artistic expression. Some examples may include: door knocking and community canvassing, marching and protesting, and petitioning.</p>
          </Facilitator>
          <Facilitator><span class="instructions">Ask participants to review the list in silence for 2 minutes, then ask them the following questions:</span>
            <ul>
              <li>When you think about the organizing tools you currently use, are they effective?</li>
              <li>What&#39;s been working well?</li>
              <li>What are some things you would change?</li>
            </ul>
            <p class="instructions">Follow up by reviewing the observing together the groups reflections and whether the current list includes traditional or cultural organizing strategies and tactics.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 3: Design Sprint: Sketching Out Organizing Strategies (15 min)</h4>
              <Instructions>Design Sprint is a way to facilitate an &quot;ideas lab.&quot; This activity sheet provides a framework for participants to quickly sketch creative ideas for addressing displacement. Give participants 2 minutes to gather art supplies, 3 minutes to think of ideas, and then cue music that will play for 8 minutes while participants illustrate sample actions in the Design Sprint template (8 boxes—1 minute per sketch box). Participants will know the time is up when the music is turned off or the volume is lowered.
                <p>Find more information on facilitating the <a href="https://www.iamnotmypixels.com/how-to-use-crazy-8s-to-generate-design-ideas/">Design Sprint</a> activity.</p>
                <p><strong class="note">NOTE:</strong> This facilitation technique is referred to elsewhere as Crazy 8s, but we&#39;re choosing to rename it to &#39;Design Sprint&#39; in this toolkit out of respect for folks with mental illness who prefer not to use the word crazy in this sort of context.</p>
              </Instructions>
                <Facilitator>We&#39;re here today to think through tools that we may utilize in order to have conversations with community stakeholders about displacement.
                  <p>In a moment, we&#39;re going to hand out a sheet of paper listing 8 mini squares. This activity is called Design Sprint and can be used with groups to help them generate ideas.</p>
                  <p>Take a few minutes to think of some successful and unsuccessful ideas in organizing.</p>
                  <p>Once you have your sheet, write about or sketch out 8 ideas that you&#39;ve used or witnessed being used as organizing tools.</p>
                  <p>We&#39;re going to set the timer and when we say, &quot;Go,&quot; sketch 1 idea per box until we stay, &quot;Stop.&quot;</p>
                  <p class="instructions">If it is helpful, share examples of multi-media or cultural organizing strategies and tactics to prompt the activity, such as:</p>
                  <ul class="instructions">
                    <li>Community murals (Chelsea&#39;s 2018 mural process) <b>TODO: ADD LINK</b></li>
                    <li>Community tours/photo walks <b>TODO: ADD LINK</b></li>
                    <li>Community archiving project (audiovisual collection of community histories, documentation of community histories) <b>TODO: ADD LINK</b></li>
<li>Filmmaking, organizing community dialogues around displacement, mobilizing and firing up folks <b>TODO: ADD LINK</b>
</li><li>Digital organizing (social media) <b>TODO: ADD LINK</b>
</li><li><a href="https://www.wbur.org/artery/2018/11/07/east-boston-gentrification-zumix-stories">Storytelling</a>
                  </li><li><a href="https://creativesantafe.org/events/affordable-housing/">Disruptive-futures dialogue</a></li>
                  </ul>
                </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 4: Share Back (13 min)</h4>
                    <Facilitator class="instructions"> Once the allotted time has lapsed, ask volunteers to share ideas illustrated in the sketches and describe them, if necessary. Facilitators will write down ideas on flip-chart paper to get as many ideas written down for the large group to review.
                      <p class="instructions">After a full list is created, ask participants to use the color-coded dots to identify the top 3 ideas that resonate with them for the group to use as tools for community actions.</p>
                      <ul>
                        <li>What are some of the top ideas?</li>
                        <li>Questions posed to the listening group: What do we like? What&#39;s missing?</li>
                        <li>How could we infuse multimedia tools into traditional organizing practices?</li>
                      </ul>
                    </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 5: Closing (5-7 min)</h4>
                        <Instructions> Close the workshop by celebrating the creativity demonstrated by all participants. Review the top 3 choices identified by the group and determine possible next steps for implementing the proposed ideas, such as selecting the next meeting date to explore options with a small subcommittee, and plan dates for potential implementation.
                          <p>Gather in a circle to close out the session as it began. Ask participants to share &quot;glows&quot; (positive outcomes) and &quot;grows&quot; (challenges or things to do differently next time) experienced in the workshop. Participants can close out the session by doing a movement that the group repeats after sharing the glow and grow. Repeat this process for each member of the circle and end with the facilitator&#39;s thanks for participation.</p>
                        </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <ul>
          <li>Identify 2-3 projects that the group will take on.</li>
          <li>Develop a timeline for taking action on 1 cultural strategy identified during the workshop.</li>
        </ul>
      </TakingAction>

      <AdditionalResources :toolkit="toolkit"></AdditionalResources>
    </div>
  </main>
</template>


<script>
import ToolkitIntro from "../ToolkitIntro";
import Introduction from "./../../components/Introduction";
import FacilitationGuide from "./../../components/FacilitationGuide";
import Facilitator from "./../../components/Facilitator";
import FacilitatorImage from "./../../components/FacilitatorImage";
import Instructions from "./../../components/Instructions";
import TakingAction from "./../../components/TakingAction";
import AdditionalResources from "./../../components/AdditionalResources";

export default {
  name: "workshops",
  components: {
    ToolkitIntro,
    Introduction,
    FacilitationGuide,
    Facilitator,
    FacilitatorImage,
    Instructions,
    TakingAction,
    AdditionalResources
  },
  props: ["toolkit"],
};
</script>