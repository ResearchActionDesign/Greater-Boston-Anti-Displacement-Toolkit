<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="$t('toolkits')[3]"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="$t('toolkits')[3]">
        <p>Communities across the country are experiencing threats to their homes and neighborhoods. There are many policy and strategy models communities can adopt to protect where they live. This workshop section is intended for engaging and developing community-driven ideas and solutions.</p>
        <p>Communities can use this activity to:</p>
        <ul>
          <li>Generate ideas and solutions by and from the community,</li>
          <li>Identify policy and strategy models that work,</li>
          <li>Gather community knowledge about how different policy and strategy models can be adopted,</li>
          <li>Identify needs and gaps in information necessary to move forward with a specific policy or strategy.</li>
        </ul>
        <p>The policies and strategies identified can be used to influence decision-makers and educate other community members about problems and potential solutions. This activity informs planning for organizing, developing, and advocating a specific policy or strategy to adopt in your community.</p>
        <p>The facilitation guide below outlines how to conduct this activity, and is intended to be adapted as needed to fit your community needs.</p>
      </Introduction>

      <FacilitationGuide :toolkit="$t('toolkits')[3]">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <ul>
            <li>To identify specific policies and strategies we have used or witnessed other communities use to protect their homes.</li>
            <li>To evaluate which policies and strategies to consider adopting and advocating in our community.</li>
          </ul>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Learned about and documented policies and strategies we are aware of and/or used as proposals to fight displacement.</li>
            <li>Identified what we know and need to know (action plan) to consider specific policy proposals and strategies for our community.</li>
            <li>Evaluated if a specific policy proposal or strategy will work in your community.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Those you invite (or exclude) will largely depend on the purpose (<em>Why do it?</em>) and outcomes (<em>What do you want to know/have at the end?</em>) of organizing this activity in your community. Ideally, there would be a minimum of 6 participants who represent a cross-section of experiences to share and discuss different policies and strategies they are aware of or witnessed others use to protect their homes.</p>
          <p>Once this has been identified, then ask:</p>
          <ul>
            <li><em>Who can help fulfill this purpose?</em></li>
            <li><em>Who is most relevant for this activity?</em></li>
            <li><em>Who might threaten the purpose?</em></li>
          </ul>
          <p>For example:</p>
          <ul>
            <li>There is a new, mixed-use (live, work, play) development proposed that will stretch across two city blocks in the community, which could potentially bring new opportunities for jobs, housing, and services. The community is currently organizing to protect existing residents and businesses and ensure the development is beneficial for existing residents and businesses. You can invite community residents and business owners located in or close to the area being developed, key organizations or organizers in the area fighting this development, and anyone else who might be directly impacted by this development.</li>
            <li>Gentrification and displacement are growing concerns for your community and the surrounding area. More and more residents are being pushed out of their homes due to rising housing costs. You can work with the community to identify and explore solutions to address the problem by inviting housing advocates, environmental advocates, past and current community members, or institution representatives from local schools or health care organizations. A cross-section of participants can help kick-start a conversation about potential policies and strategies your community can adopt and advocate to fight displacement.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identify 1-2 facilitators and assign roles for the session, including 1 note taker and 1 timekeeper. (If 2 facilitators, the 2 can rotate roles—e.g., 1 facilitates and the other takes notes and keeps time.)</li>
            <li>Print blank group dialogue worksheets (HERE <b>TODO: LINK</b>) for each participant.</li>
            <li>Print worksheet examples (HERE <b>TODO: LINK</b>) for each facilitator. <strong>Note:</strong> If helpful, the worksheet examples can be printed and shared with participants.</li>
            <li>Pens and pencils for writing on worksheets.</li>
            <li>Flip-chart/butcher paper (blank) for capturing share backs and discussions</li>
            <li>Markers for flip-chart/butcher paper</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Design for what you want! Customize the facilitation guide to fit your desired purpose, needs, and outcomes.</li>
            <li>Determine the collective purpose of this activity to consider adopting and advocating in your community (e.g., <em>Is this for a specific campaign, issue, or target the community is wanting to influence?</em>).</li>
            <li>Identify how much time you will need for each discussion and activity (suggested time: 60 minutes). The Idea Generation (Part 1) exercise goes a bit quicker—5 minutes on your own and 10-15 minutes to share back. You will likely spend more time (about 30 minutes) doing the Evaluating Policies and Strategies (Part 2) group work and share-backs.</li>
            <li>Based on who is participating Identify the anticipated number of break-out groups.</li>
            <li>Schedule time after your activity to debrief with the facilitators on what worked and what you might change if conducting the activity again. Identify any action items for you, your organization, or community.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <h4 class="subcategory">Part 1: Idea Generation (15 min)</h4>
          <h5>Step 1: Introduction (5 min)</h5>
          <Facilitator>In Part 1 of this exercise, we would like to hear about what policies and strategies you have used or have witnessed being used in other communities. This is your vision of ideas for what policies and strategies you think can help protect where we live. There are no right or wrong answers in this exercise.
          <p>Remember: no one knows everything and together we know a lot! Our goal is to get as many ideas on the table to share with one another.</p>
          <p>In Part 2 of this exercise, we&#39;ll select a few ideas to dig deeper into evaluating what we already know and need to know to consider adopting for our community.</p>
          </Facilitator>
          <h5>Step 2: On Your Own (5 min)</h5>
        <Instructions>Pass out Part 1 of the worksheet <b>TODO: LINK</b> to participants.
        <p>Ask participants to take approximately 5 minutes to jot down on their own: (1) <em>What is the policy or strategy?</em> and (2) <em>brief description of how they have used or witnessed it being used?</em></p>
          <p>If helpful, you might think about sharing one of the following prompts:</p>
          <ul class="facilitator">
              <li>Think of policies and strategies as a vision or plan of action to achieve a specific goal. It sets the guidelines for how something does (or doesn&#39;t) get done. Policies and strategies guide decision-making within different systems and institutions, e.g. city/state government, corporations, schools, etc.).</li>
              <li>Think about your own stories and experiences with fighting displacement through your own movement and migration. This could be where you live now or in the past.</li>
              <li>Think of a time you&#39;ve witnessed a community successfully protect their homes. How did they do this?</li>
              <li>Share example cards found (HERE <b>TODO: LINK</b>) of other methods communities have considered and adopted with success.</li>
            </ul>
            <p>Share that the goal is to get as many ideas as we can on the table in a short time—just jot down thoughts and ideas as they come to you.</p>
            <p>Ask participants if they have any questions about the exercise before starting the clock.</p>
            <p>If it is helpful, you can share examples for Part 1, found (HERE <b>TODO: LINK</b>). Start the time and provide participants with a 2- and 1-minute reminder of time left to work on their own.</p>
        </Instructions>
          <h5>Step 3: Sharing Back (5 min)</h5>
            <Instructions>Ask participants to share (popcorn style) their ideas and briefly describe how they did/can help in our communities.
            <p>Share the ideas noted on flip-chart/butcher paper for participants to review as a group.</p>
            <p>If they would like to expand the list, the facilitator can share examples for Part 1, found (HERE <b>TODO: LINK</b>) of other policies and strategies communities have considered and adopted as ideas to consider and examine in Part 2 of the exercise.</p>
            <p>Once the group has shared and generated a list of ideas to consider, move to Part 2 of the exercise to dive deeper into a few of the ideas listed.</p>
            </Instructions>
          <h4 class="subcategory">Part 2: Evaluating Policies &amp; Strategies (25-30 min)</h4>
          <h5>Step 1: Introduction (5 min)</h5>
            <Facilitator>For Part 2, we&#39;d like to learn how you think the policies and strategies identified in Part 1 could be used in our communities.
              <p class="instructions">For this exercise, participants will work in small groups. Divide into groups by counting off based on the anticipated number of break-out groups and participants. For example, if you have 20 participants and want groups of 4 people, have participants count off with 1, 2, 3, 4, which will give you 5 groups of 4.</p>
          <ul>
            <li>Each group will choose 1 policy or strategy from the list generated in Part 1 of this exercise to focus on. You can choose from the ideas shared in the &quot;share-back&quot; to the larger group, or choose another idea within your group that you&#39;re interested in exploring.</li>
            <li>It&#39;s okay if groups choose the same policies and strategies to focus on.</li>
            <li>Once the group has chosen their policy or strategy, each group will examine 4 questions/areas:<ol>
              <li>How would we adapt?</li>
          <li>What&#39;s needed to advance these policies/strategies?</li>
          <li>Who can help?</li>
          <li>What opportunities and barriers exist?</li>
            </ol>
            </li>
            <li>At the end, groups will be asked to share back. This series of questions can help communities explore the information available and needed to decide what actions to take.</li>
          </ul>
            </Facilitator>
          <h5>Step 2: Deeper Dive Within Groups (10 min)</h5>
          <Instructions>Pass out Part 2 of the worksheet to participants.
            <p>Ask participants to pair up in groups of 2-3.</p>
            <p>Review the worksheet steps with participants: (1) Identify policy or strategy to focus on and write it in at the top of the worksheet table, then (2) Think through answers together to the 4 questions outlined in the worksheet.</p>
            <p>Remind participants that the goal here is to evaluate what we already know and need to know for our community.</p>
            <p>Ask participants if they have any questions about the exercise before starting the clock.</p>
            <p>If it is helpful, the facilitator can share examples for Part 2, found (HERE <b>TODO: LINK</b>).</p>
            <p>Start the time and provide participants with a 5-, 2-, and 1-minute reminder of time left to work in their groups.</p>
          </Instructions>
          <h5>Step 3: Share Back (10-15 min)</h5>
          <Instructions>Ask each group to share the policy or strategy they focused on, and for each of the 4 questions, 1 highlight they discussed and documented (e.g., How they think it could be adopted, a specific action steps, etc.).
            <p>Share the discussion noted by groups on flip-chart/butcher paper for participants to review as a group.</p>
            <p>After each group shares, ask other participants if they have any questions or reflections on what the group shared.</p>
            <p>Once all of the groups have shared, reflect with participants on the ideas and information shared by asking</p>
              <ol class="facilitator">
                <li>What stood out to the group as possible policies and strategies for their community?</li>
                <li>What policies and strategies are they most excited about learning more about, exploring after today?</li>
                <li>How do we want to use the ideas and information we generated here today?</li>
              </ol>
            <p>Gather the reflections shared by groups on flip-chart/butcher paper for participants to see as a group.</p>
            <p>Based on the activity purpose, goals, and outcomes set forth for organizing this session, close the discussion by identifying and outlining any next steps as a result of this activity. For example, you may consider organizing a planning session to prioritize one or two policies and strategies for the group, organization, or community members to focus on for an advocacy campaign, want to conduct more research on one or two policies/strategies to decide if they will work in your community, or build a shared action plan to help move identified policies and strategies forward in your community.</p>
          </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="$t('toolkits')[3]">
        <p>At the close of this activity, consider any asks of the group to support community mobilizing efforts and actions in and outside the space created today.</p>
        <ul>
          <li>Use the policies and strategies discussed to influence decision makers and educate other community members about problems and potential solutions.</li>
          <li>Join other local groups and organizations you learned about today who are already working on adopting one or more of the policies and strategies in the community.</li>
          <li>Organize this activity with other community members and stakeholders.</li>
        </ul>
      </TakingAction>

      <AdditionalResources :toolkit="$t('toolkits')[3]"></AdditionalResources>
    </div>
  </main>
</template>


<script>
import { mapState } from "vuex";
import ToolkitIntro from "../ToolkitIntro";
import Introduction from "./../../components/Introduction";
import FacilitationGuide from "./../../components/FacilitationGuide";
import Facilitator from "./../../components/Facilitator";
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
    Instructions,
    TakingAction,
    AdditionalResources
  },
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>