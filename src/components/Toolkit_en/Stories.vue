<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Acknowledging ancestral roots and connecting individual backgrounds to the story of migration and the current places/spaces we reside in presently is a powerful way to connect one&#39;s individual story to that of the built community. Sharing our stories can bring communities closer together and help make connections between migration and displacement. Communities can use this activity to:</p>
        <ul>
          <li>acknowledge tribal and Indigenous land loss</li>
          <li>lift up the importance of naming and reclaiming spaces of those originally displaced, and</li>
          <li>visualize a communities stories of migration and displacement.</li>
        </ul>
        <p>By telling our stories we can individually and collectively disrupt displacement in our communities.</p>
        <p>The facilitation guide below outlines how to conduct this activity, and is intended to be adapted to fit your community needs.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <ul>
            <li>To explore the connections between migration and displacement for residents.</li>
            <li>To share our stories about coming to—and fighting to stay in—our communities, and reflect on the successes of organizing against displacement.</li>
          </ul>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>A shared understanding and illustration of how displacement has impacted our communities.</li>
            <li>Shared stories of the connections between migration, gentrification, and displacement.</li>
            <li>A shared narrative to drive local action and build deeper relationships with other communities facing similar challenges.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <ul>
            <li>Community members who have experienced displacement or fear displacement in a designated community. The workshop unfolds over 3 distinct work sections (individual reflection, pair or triad share-outs, and a large group discussion).</li>
            <li>Facilitators should think through whom might be best to invite to this type of discussion, ideal size of the group, etc. These factors might depend on how much trust exists between potential participants, the range of experiences in the room, etc. 6-10 participants is probably a good target for most groups.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identify 2-3 facilitators and assign roles for the session, including 1 note takers and 1 timekeeper. For each step, 1 facilitator can explain the activity while the other passes out materials. For Step 3, 1 facilitator should take notes while the other facilitates the group presentations.</li>
            <li>To prepare for the activity, facilitators should research and identify the name(s) of the Indigenous communities who occupy/occupied the land on which the session is conducted.</li>
            <li>Jumbo black marker</li>
            <li>Flip-chart paper</li>
            <li>Plenty of pens, pencils, and markers</li>
            <li>Masking or painter&#39;s tape</li>
            <li>Facial tissues</li>
            <li>Printed copies of worksheets <b>TODO: LINK</b></li>
            <li>Tree stencil <b>TODO: LINK</b> (print, trim, and tape together)</li>
            <li>Printed and trimmed &quot;fruit&quot; or cut-out shapes from construction paper <b>TODO: LINK</b></li>
            <li>Count how many small groups you&#39;ll have. For each group, trace a tree onto a piece of flip-chart paper.</li>
            <li>Create a &quot;river&quot; on a wall made of blue poster board, or drawn across several pieces of flip-chart paper. During presentations, the trees will be taped up along the river.</li>
            <li>Make a plan as facilitators for how to support participants if the activities bring up strong emotions, trauma or sadness, and how to close the space.</li>
            <li>Identify a &#39;landing space&#39; in another room or separate from the main workshop space where folks can retreat to if they need to move through rough emotional waters.</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>This activity requires significant prep time. Set aside at least 2 hours with some friends to print the worksheets, create the tree stencil, trace the trees, cut out the trees, cut out the fruit, create the river, and set up materials.</li>
            <li>Each group will want to spread out around a tree—ideally, several small round tables, 1 for each group.</li>
            <li>Background music can create a nice atmosphere, and also help signal when each activity has ended.</li>
            <li>The activity should be planned with adequate time to process any emotional trauma or joy that emerges during the session. Facilitators should think through an adequate closing process to end the session in a healthy way.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 1: Grounding (10 min)</h4>
          <Instructions>Before the activities begin, gather the group in a large circle to ground and &quot;set the intention.&quot; Begin by acknowledging the Indigenous land we&#39;re on. Ground the conversation in the importance of creating a safe and brave space, which starts with the acknowledgement of tribal and Indigenous land loss and the importance of naming and reclaiming spaces of those originally displaced.
          <p>Facilitators may then consider opening with a simple breathing or meditation exercise. For example, creating the sound of rain as a group (participants rub their hands together, then snap their fingers, followed by patting their laps) or asking participants to close their eyes and call out the name of an ancestor or loved one they want to bring into the room with them followed by taking 3 deep inhales and exhales as a group.</p>
          <p>This helps set the tone and allows participants to enter a mental and heart space that moves them toward recalling memories from their personal migration story into the next activity. Close this section by instructing the group to open their eyes and make eye contact with a person in the circle (alternatively, place their palms not-quite-together to make energetic contact), then thanking everyone for their participation and openness to create a safe and brave space for the time together.</p>
          <p>Participants may opt out of the group opening by honoring their individual practices of preparing to be present in a group activity.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 2: Individual Stories (10 min: 2 min for explanation, 8 min for individual work)</h4>
          <p>The goal of this section is to begin with individual work. This portion of the activity can happen in a quiet area, or soft and culturally appropriate music can be played in the background. Each participant should come away from this segment more connected to elements of their individual migration story. The background setting should be optimal for individual reflecting, allowing participants to go deep or highlight high-level elements of their personal migration story.</p>
          <Instructions>[Reference this <a href="https://docs.google.com/document/d/1JBcZiMITRek4kKXNz07UZT2Pq5Gw_B7MeIAOiHSYzm4/edit">handout</a> in advance] <b>TODO: LINK</b> All participants should have a sheet of paper divided into 3 sections:
          <ol class="facilitator">
            <li>Who are my people?</li>
            <li>How did I get here, and what were the major turning points and struggles along the way?</li>
            <li>What have I learned along the way?</li>
          </ol>
          Explain the worksheet and each question as you pass out the handout. Explain that participants will be asked to share what they are comfortable sharing with a small group of 3-4 people in the next stage.
          <p>Ask everyone to take 8 minutes to fill out the worksheet on their own.</p>
          <p><strong>Note:</strong> Facilitator(s) may advise participants to spread out in the space. Consider making the location comfortable enough for participants to sit on the ground, at a table, or in a comfortable chair or couch.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 3: Small Group Discussions (35 min) </h4>
          <Instructions>This discussion builds on the previous individual work. The goal of this segment allows participants to connect with 1 or 2 other members of the group to identify similarities in their personal narratives, to know that they are not alone, and share part of their journey to the community experiencing or combatting displacement.
            <p>Divide people into groups and hand out supplies.</p>
          </Instructions>
          <Facilitator>Now we&#39;d like to ask you to get into small groups and share your stories with each other. We&#39;re hoping this will be a way to get to know each other, but also to learn what commonalities exist in your experiences with coming to this area. Once you&#39;ve gathered in your groups,  allow each person to share some of what they wrote. We&#39;ll remind you when it&#39;s time to change turns.
            <p>As you&#39;re sharing your stories with each other, think about what sorts of commonalities and shared themes are coming up—you&#39;ll be using those to create a shared tree representing the story of your group.</p>
            <p>While you talk, we&#39;ll be passing out art supplies for the next part of the evening.</p>
          </Facilitator>
          <Instructions>Ask people to count off to create groups of 3-4 and gather in those groups. As each person shares a part of their story, please ask them to share their gender pronouns with the group as well.
            <p>Check in after 4 minutes (now you should be moving on to the next person if you haven&#39;t already) and after 8 minutes, etc.</p>
            <p>While groups are discussing, pass out materials. Each group gets roots and branches per person as well as a trunk and some fruit. Groups also get a blank sheet of larger paper, tape or glue, and markers.</p>
          </Instructions>
          <Facilitator>Together, as a group, fill out the roots and branches of your tree. <span class="instructions">(10 min)</span>
          <ul>
            <li>Now, it&#39;s time to fill in your collective story. You should have some art supplies as well as some blank roots, branches, and fruits. As a group, you&#39;ll be using those to assemble a collective story.</li>
            <li>On each of your roots, write an answer to the prompt &quot;we came from ____&quot;</li>
            <li>On each of your branches, write an answer to the prompt &quot;we struggled with ____ to get here&quot;</li>
          </ul>
          <p class="instructions">Now move on to the fruit. (5 min)</p>
          <ul>
            <li>How do you envision the future of your communities? As you think of possibilities for your communities in the future, write each of them on a piece of fruit and mount that on the tree.</li>
          </ul>
          <p class="instructions">At close of the activity, invite the groups to plant the trees along the river.</p>
          </Facilitator>
          <Facilitator>What story do we make together in the room?
            <p>We invite each of you to bring your trees, your collective stories, to the front of the room and tape them along the river. Once that&#39;s done, take some time for a break, get some snacks, and also witness the stories of other groups. We&#39;ll reconvene in 10 minutes. At that point, we&#39;ll also give each of you a chance to share your tree with the rest of the group.</p></Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 4: Sharing Back (20 min)</h4>
          <Instructions>The goal of this section is to move from personal narratives to shared connections in each small group, through to shared experiences for the full group. At the end of reporting out, participants should be aware of parallels in experiences and reflect on lessons learned and stories shared by participants.
          <p>Welcome group back from break.</p>
          <p>Ask groups to come up one-by-one by their tree and share with the group what they came away with from the activity. Sample guiding questions:</p>
          <ul class="facilitator">
            <li>What stood out to you about your shared story?</li>
            <li>What is one thing that you struggled with in your group?</li>
            <li>What commonalities did you see?</li>
            <li>What was a moment of creativity / when did you learn something new?</li>
            <li>Why did you choose the roots/branches that you did?</li>
            <li>What were your visions for the future?</li>
          </ul>
          <p>As commonalities, struggles and moments of creativity are mentioned, write them in the river with markers in a creative way.</p>
          <p>If there&#39;s time, open up a discussion to the large group around the same guiding questions by reading back the themes written into the river.</p>
          </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <p>At the close of this activity, ask the group to consider other populations and partners that should participate in a story sharing exercise.</p>
        <ul>
          <li>Identify other potential participants (e.g., youth) who should experience the story-share activity. Are there opportunities for an intergenerational conversation?</li>
          <li>Sign up any new participants to current campaigns or to the organization&#39;s newsletter to sustain engagement.</li>
          <li>Create a visual, mapped representation of the areas where participants come from and where they reside now in Massachusetts. Consider using a world map with pushpins and colorful yarn to track the group&#39;s migration story.</li>
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