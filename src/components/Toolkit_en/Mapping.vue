<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Many have experienced the negative impacts of exclusionary political and corporate decisions that have led to displacement. Understanding the systems of power in which these decisions are being made and how you as a community member can influence the process is critical to advocate for change.</p>
        <p>Mapping power and money is a useful activity for engaging communities to think about relationships affecting the issues they grapple with, which inform organizing strategies and tactics. This activity helps identify and assess the local and regional political and community environment related to a specific issue by:</p>
        <ul>
          <li>Identifying different actors and specific targets for campaigns, </li>
          <li>Identifying community members’ roles as actors,</li>
          <li>Identifying different forms of power and how different actors and systems interact and relate,</li>
          <li>Analyzing “what or who” can weaken or strengthen the power in the community, and</li>
          <li>Identifying opportunities to advocate for change, where to intervene.</li>
        </ul>
        <p>The facilitation guide below outlines how to conduct this activity, and is intended to be adapted to fit your community needs.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <p>To co-create a visual map of different systems of power and influence in our communities.</p>
          <p>To discuss how we can use our power maps for action.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Assessment of local and regional political and community environments to help identify opportunities to advocate for change.</li>
            <li>A shared understanding of community stakeholders, power, and money. </li>
            <li>Useable maps to influence and/or leverage identified power and money in the community for identified organizing strategies and tactics. </li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Those you invite (or exclude) will largely depend on the purpose (<em class="italic">Why do it?</em>) and outcomes (<em class="italic">What do you want to know/have at the end?</em>) of organizing an activity mapping power and money in your community. Ideally, there would be a minimum of 8 participants to break out into smaller groups for the mapping activity.</p>
          <p>Once this has been identified, then ask:</p>
          <ul>
            <li>Who can help fulfill this purpose?</li>
            <li>Who is most relevant for this activity?</li>
            <li>Who might threaten this purpose?</li>
          </ul>
          <p>For example:</p>
          <ul>
            <li>A development proposed in the downtown area of your community will push out renters and a locally owned business. You can identify/invite the renters likely to be pushed out and the business owners and consumers who frequent this business. You may also want to invite key organizations or organizers in the area fighting this development. Who else might be directly impacted by this development?</li>
            <li>Gentrification and displacement are growing concerns for your community and the surrounding area. You want to draw attention to and identify opportunities to address the problem. You can invite local organizations, community members of all ages, local business owners, and government representatives to have a broader discussion about issues occurring in the region. Mapping power and money can help kick-start a conversation for taking collective action.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identify 1-2 facilitators and assign roles for the session, including at least 1 note takers and at least 1 timekeeper.</li>
            <li>Write the activity instructions (examples below) on the flip chart for:</li>
            <ul>
              <li>the <b>Map Legend</b> asking participants to show the 3 core elements in the power maps for the group exercise, including examples.</li>
              <li>questions to address during the <b>Show and Tell</b>.</li>
              <li>each core element (Actors/Stakeholders, Relationships, Types of Power) on a separate sheet to record notes from the <b>Discussion and Planning</b> activity. (Use butcher or flip-chart paper to post in the room ahead of time and use during the activity.)</li>
            </ul>
            <table>
              <caption>Examples of Flip Charts to Prep</caption>
              <thead><tr><th>Map Legend</th><th>Show & Tell</th><th>Mapping Techniques Discussion & Planning</th></tr></thead>
              <tbody>
              <tr><td>
                <p><b>Actors/Stakeholders</b>: individuals, institutions, groups (e.g., mayor, tenants, church, community groups, city council).</p>
                <p><b>Relationships</b>: allies, opposition, authoritative (e.g., close allies, mayor, city council).</p>
                <p><b>Types of Power</b>: political power, money, people (e.g., church, community groups).</p>
              </td>
                <td>
                  <ol>
                    <li>Why did you choose this way of presenting power and money?</li>
                    <li>How would you develop it further or go deeper?</li>
                    <li>How would you use it?</li>
                  </ol>
                </td>
                <td>
                  <p>What worked well?</p>
                  <p>What do you still need to figure out?</p>
                </td>
              </tr>
              </tbody>
            </table>
            <li>Examples of power maps drawn by other groups can be useful to demonstrate output for the activity but are not necessary for conducting the activity. (Examples in the activity instructions below.)</li>
            <li>Blank flip-chart/butcher paper for each break-out group.</li>
            <li>Colored markers for creating power maps.</li>
            <li>Colored sticky notes for indicating varied information on power maps.</li>
            <li>Photographed participants’ power maps after the session for recording purposes (with participants’ permission).</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Design for what you want! Customize the facilitation guide to fit your desired purpose, needs, and outcomes for conducting this activity.</li>
            <li>Identify the collective purpose—either established in advance or as part of the activity—of mapping power and money in your community (e.g., Is this for a specific campaign or issue the community wants to influence?)</li>
            <li>Identify how much time you will need for each discussion and activity (suggested time: 60 minutes). You will most likely allocate most time for group work and show-and-tell.</li>
            <li>Identify the anticipated number of break-out groups based on who is participating. If participants are from different communities, consider grouping by communities as well.</li>
            <li>Schedule time after your activity to debrief with the facilitators on what worked and what you might change if conducting the activity again. Identify any action items for you, your organization, or community.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 1: Introducing the Activity (5 min)</h4>
          <Facilitator>Understanding power relationships and the flow of resources that shape the problem we are trying to solve will be crucial in helping us strategize effectively, adapt to new events or changes, and evaluate our progress.
            <p>Power-mapping is a common community-organizing technique used to visually represent relevant stakeholders relative to an issue, the types of power they have, and how they relate to one another regarding a specific issue or problem. Like other maps, power maps help users orient themselves in relation to the world around them. These maps can be used for specific actions or campaigns with tight timelines and focused objectives—like planning an action or event—but can also be used for bigger, ongoing efforts, like coalition-building.</p>
            <p>Unlike most other maps, they are likely to change—sometimes dramatically in response to new events or circumstances. When the power dynamics of a situation around displacement changes—for example, a new development is planned, or a new policy is put into place—power maps change, too.</p>
            <p>Before we go into more detail, let’s take a minute to draw from the experiences of the group.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 2: Group Big-Picture Questions (5 min)</h4>
          <Facilitator>We’re curious to know from you all how or why you think mapping power might be useful. Does anyone have any ideas or experiences that speak to why we might want to map the power dynamics around an issue or campaign?
          <p class="instructions">Follow-up with:</p>
          <ul>
            <li>Has anyone in the room done power-mapping before?</li>
            <li>How did it go? What did you do/learn?</li>
          </ul>
          </Facilitator>
          <Instructions>Recognize (verbal or written) experiences shared by the group. This information can be used to build or reinforce reviewing the basics of mapping power and money in the next step.</Instructions>

          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 3: Reviewing the Basics (5 min)</h4>
          <Facilitator>Let’s recap what we’ve learned so far:
            <ul class="instructions">
              <li>The <b>role</b> of power-mapping is to help you orient your group to the other stakeholders involved in the issue you are engaging, and to help you strategize about how to both build power and change power relationships between other stakeholders.</li>
              <li>The <b>goal</b> of a power map is to clearly represent power relationships between the stakeholders involved in the issue you are engaging.</li>
              <li>The <b>core elements</b> of a useful power map include:
              <ul>
                <li>The relevant stakeholders (individuals, groups, institutions, etc.)
                <ul><li>For example: the mayor, tenants, city planners, allied community groups</li></ul></li>
                <li>The types of power that stakeholders have (individually or collectively)
                  <ul><li>For example: political power, people power, financial resources, land ownership</li></ul></li>
                <li>The relationships between stakeholders
                  <ul><li>Who is allied with who? Who is opposed to whom? Who has power over whom?</li></ul></li>
              </ul>
            </li>
            </ul>
          </Facilitator>
          <Facilitator>Let’s review a couple of examples to help you become more familiar:

          <ul class="instructions">
            <li><b>Example #1:</b> This community map focusing on displacement in Chelsea identifies the different systems, how they relate, and the types of power they hold.<img src="../../assets/workshop_images/mapping/Example_1.png" alt=""></li>
            <li><b>Example #2:</b> This community map focusing on displacement issues lists and connects the different actors, roles, relationships, and types of power they each hold in the community.<img src="../../assets/workshop_images/mapping/Example_2.png" alt=""></li>
            <li><b>Example #3:</b> This community map illustrates the different actors involved in passing an ordinance for a food policy council in Everett. It shows how actors, their influence, and their connections to one another can ultimately work to reach City Council (the “target”).<img src="../../assets/workshop_images/mapping/Example_3.png" alt=""></li>
          </ul>
          </Facilitator>
          <Facilitator>As a very flexible tool, power maps can take many different forms, and how they take shape will likely evolve as you refine your analysis of the situation and as new events or changes occur. At the same time, all of the examples have the same core elements previously mentioned:
          <ul>
            <li>They show who the key “actors” or stakeholders are.</li>
            <li>They show how the actors are related to one another.</li>
            <li>They show how power is embedded within these relationships.</li>
          </ul>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 4: Group Work — Produce Power Maps: “Displacement in My Community” (15 min)</h4>
          <Facilitator>We’re going to dive right into creating our own power map for resisting displacement. While there are lots of power-mapping formulas out there, <b>our priority is to start with what we know</b>, allowing our analysis to guide map formation, rather than imposing a predetermined format without knowing in advance if it’s right for us. That means that today, we’re producing our first draft(s), and will conclude this exercise by agreeing on a plan to synthesize and refine the final product (which will keep changing). This means we can focus on being analytical and creative without worrying about how every detail is going to be fine-tuned.</Facilitator>
          <Instructions>The power map should be focused on the group’s objective. The power map can be focused on a broad issue, such as resisting displacement, but it can also be focused on a specific effort or event, like a teach-in or an election.
            <ul>
              <li>Group participants into clusters of 2-3.</li>
              <li>Every group should have paper, markers, and sticky notes.</li>
            <li>Ask each group to make a map—a visual representation—of the power relationships and money that are shaping your effort/issue.
            <li>Encourage groups to use different shapes, sizes, and arrows to represent the 3 core elements of power and money maps [refer to prior flip chart]:
              <ul>
                <li>The relevant <b>stakeholders</b></li>
                <li>The <b>types of power and money</b> that stakeholders have</li>
                <li>The <b>relationships</b> between stakeholders</li>
              </ul>
            </li>
              <li>Let the groups know that how you arrange the page is up to your group!
                <ul><li>Share this hint: <em class="italic">It might be helpful to start with sticky notes so you can move things around!</em></li></ul></li>
            </ul>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 5: Show & Tell (10 min)</h4>
          <Instructions>Ask each group to take turns sharing their power and money map with the larger group. When they do so, they should answer the 3 questions from the flip chart:
            <ol class="italic">
              <li>Why did you choose this way of presenting power and money?</li>
              <li>How would you develop it further or go deeper?</li>
              <li>How would you use it?</li>
            </ol>
          </Instructions>
          <h4 class="subcategory">Step 6: Discussion & Planning (15-20 min)</h4>
          <Facilitator>Now that we’ve heard from all the groups, it’s time to reflect on the different power-mapping techniques that have emerged from your work. Now, our goal is to figure out how to finalize our shared power map so that it can be useful and in service of our larger goals.
            <p>Since power maps are meant to be revised and adapted as circumstances change, let’s start by thinking about the structure and form of the map, rather than the specific content (e.g., which actors are included).</p>
          <p><span class="instructions">Open the discussion by asking the group,</span> What have you done and witnessed other groups do today?</p>
            <p>What <b>strategies or techniques</b> do you envision for <b>representing stakeholders / relationships between stakeholders / types of power</b> in the power maps in the room that you think we should adopt for our shared version?</p>
            <ul>
              <li><span class="instructions">An alternative way to ask this:</span> What did other groups do that helped you see <b>the stakeholders / the relationships between stakeholders / types of power</b> in a new or clearer way?</li>
              <li><span class="instructions">Follow up each comment with:</span> How do you think that will make the map more useful for our purposes?</li>
            </ul>
            <p>What do we as a group still need to figure about out how to represent <b>stakeholders / types of power / relationships</b>?</p>
            <ul><li><span class="instructions">Follow-up each comment with:</span> How do you think that will make the map more useful for our purposes?</li></ul>
            <p>What <b>other information</b> have we uncovered? Are there specific forms of research we need to do in order to have enough information for an effective and actionable power map?</p>
            <ul><li><span class="instructions">Follow-up each comment with:</span> How do you think that will make the map more useful for our purposes?</li></ul>
          </Facilitator>
          <Instructions>During this discussion, you or the note-taker will record comments on flip charts—1 for each core element (Actors/Stakeholders, Relationships, Types of Power) divided into 2 sections (1. What worked well? 2. What do we still need to figure out?). During the discussion, attempt to synthesize any duplicate/overlapping suggestions, and gain consensus about which ideas/suggestions to incorporate into the final power map.</Instructions>
          <Instructions>Depending on the size of your group and the number of power maps created, you and the group may decide to further refine the structure and format of your power maps before discussing the content. For example, the group may decide to take elements from several of the maps presented to create a single, shared power map. In this case, it might make sense to facilitate a follow-up activity focusing on designing a shared power map, and then diving into the content questions so that everyone is working from the same map. Alternatively, you could focus on the content questions of one or two maps depending on the group’s priorities.
            <p>If you plan to have a discussion about content during this activity, the following questions can guide you. The goal is to ensure that all of the relevant information for your context and problem is accounted for.</p>
          </Instructions>
          <Facilitator>Now let’s pivot from the structure and format to think more about the content. Here, we want to reflect on specific stakeholders, types of power, and relationships, and understand if there are any gaps in our understanding that we need to address and how to make these maps actionable.
            <ul class="instructions">
              <li>First, review the stakeholders that have been listed. Is there any individual, group or organization that is missing representation? If so, is there consensus on including them, or do we need more information?</li>
              <li>Second, think about the types of power that have been suggested. Does anyone notice ways we can more accurately label the different types of power? Are there any types of power that you think affect the issue of displacement but have not yet been accounted for?</li>
              <li>Finally, consider the relationships between stakeholders. Have all of the important connections been noted? Are there any gaps in our understanding, and if so, how can we fill them? Do we need more information?</li>
            </ul>
          </Facilitator>
          <Instructions>Based on the time available and the composition and goals of the group, you may also decide to focus instead on engaging the group in a discussion on how to use the power maps for action. Whether or not this is appropriate at this stage will depend on how much you plan to revise and synthesize the maps after the activity. If you plan to have this discussion during the activity, the following questions may guide you.</Instructions>
          <Facilitator>Ask the group these questions to discuss how the group can use the power maps for action.
            <ul class="instructions">
              <li>How can we use these maps for our decision-making? What decisions do we need to make?</li>
              <li>Where and how can we take action?</li>
              <li>What else do we need to know, research to make this actionable?</li>
              <li>Are there specific campaigns, efforts to prioritize?</li>
              <li>Are there specific targets to prioritize?</li>
              <li>How do we want to synthesize the maps produced here?</li>
              <li>How do we want to adapt the maps as circumstances, events change?</li>
            </ul>
          </Facilitator>

            <Instructions>Record comments on sticky notes to position on the most relevant parts of the map. For example, if the group identifies an action for a specific actor, then you would place that action next to the actor on the map.</Instructions>

        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <p>At the close of the activity, consider asking the group to support community mobilizing efforts and actions in and outside the space created today.
        </p>
        <ul>
          <li>Take your power map home and check if others in your circle might have something to add! If facilitating a follow-up activity to design a single map, this could be a great homework assignment for participants to engage more voices and bring back to a future activity.</li>
          <li>Try leading your own mapping activity in the community.</li>
          <li>Ask if there are other spaces or people to engage in an activity mapping power and money.</li>
          <li>Use the maps to inform the development of strategies and tactics for your community.</li>
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
import FacilitatorImage from './../../components/FacilitatorImage';
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
  props: [
    "toolkit",
  ],
};
</script>