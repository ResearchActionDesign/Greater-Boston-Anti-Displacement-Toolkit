<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="$t('toolkits.stories')"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="$t('toolkits.stories')">
        <p>In our communities, many have experienced the negative impacts of exclusionary political and corporate decisions that have led to displacement. Understanding the systems of who or where these decisions are being made and how as a community member you can influence is critical to advocate for change. [add data point]</p>
        <p>Mapping power and money is a useful tool for engaging communities in thinking about the current community systems and informing organizing strategies and tactics. This tool can help groups identify and assess the local, regional political and community environment by:</p>
        <ul>
          <li>Identifying the different actors, specific targets for campaigns,</li>
          <li>Identifying community members roles as actors,</li>
          <li>Identifying different forms of power and how different actors, things interact,</li>
          <li>Analyzing “what or who” can weaken or strengthen the power in the community,</li>
          <li>Identifying opportunities to advocate for change, where to intervene..</li>
        </ul>
        <p>Communities often use this tool as part of developing a campaign or strategy to fight against a specific problem, though it can be helpful any time the landscape shifts within the community systems(e.g. new actors, decisions, issues change/grow).</p>
      </Introduction>

      <FacilitationGuide :toolkit="$t('toolkits.stories')">
        <!-- Purpose and Outcome -->
        <div slot="workshop_purpose">
          <h4 class="subcategory">Purpose</h4>
          <ul>
            <li>To co-create a visual map of the different systems of power and influence in our communities.</li>
            <li>To discuss how we can use our power maps for action.</li>
          </ul>
        </div>
        <div slot="workshop_outcomes">
          <h4 class="subcategory">Outcomes</h4>
          <ol>
            <li>Assessment of local and regional political and community environments to help identify opportunities to advocate for change.</li>
            <li>A shared understanding of community stakeholders, power, and money.</li>
            <li>Useable maps to influence and/or leverage identified power and money in the community for identified organizing strategies and tactics.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Who_to_Invite">
          <p>Who you invite (or exclude) will largely depend on the purpose (Why do it?) and outcomes (What do you want to know/have at the end?) of organizing a mapping power and money activity in your community.</p>
          <p>Once this has been identified, then ask, Who can help fulfill this purpose? Who is most relevant for this activity? Who might threaten the purpose? For example:</p>
          <ul>
            <li>There is a specific development proposed in the downtown area of your community that will push out renters and a locally owned business. You can target inviting the renters likely to be pushed out, the business owners and consumers who frequent this business. Key organizations or organizers in the area fighting this development. Who else might be directly impacted by this development?</li>
            <li>Gentrification and displacement is a growing concern for your community and the surrounding area. You want to draw attention to and identify opportunities to address the problem. You can target inviting organizations, community members and youth, local business owners, and government representatives to have a broader conversation and discussion of the issues occurring in the community and region. Mapping power and money can help kick-start a conversation for taking collective action.</li>
          </ul>
        </template>

        <!-- Who to Invite -->
        <template slot="Who_to_Invite">
          <p>Who you invite (or exclude) will largely depend on the purpose (Why do it?) and outcomes (What do you want to know/have at the end?) of organizing a mapping power and money activity in your community.</p>
          <p>Once this has been identified, then ask, Who can help fulfill this purpose? Who is most relevant for this activity? Who might threaten the purpose? For example:</p>
          <ul>
            <li>There is a specific development proposed in the downtown area of your community that will push out renters and a locally owned business. You can target inviting the renters likely to be pushed out, the business owners and consumers who frequent this business. Key organizations or organizers in the area fighting this development. Who else might be directly impacted by this development?</li>
            <li>Gentrification and displacement is a growing concern for your community and the surrounding area. You want to draw attention to and identify opportunities to address the problem. You can target inviting organizations, community members and youth, local business owners, and government representatives to have a broader conversation and discussion of the issues occurring in the community and region. Mapping power and money can help kick-start a conversation for taking collective action.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identify facilitators roles for the session, including notetakers and timekeeper.</li>
            <li>Pre-scribe (1) the map “legend”, three things asking participants to show in the power maps for the group exercise, including examples. (2) the questions to address during the show and tell.</li>
            <li>Examples of power maps drawn by other groups can be useful to demonstrate output for the activity but are not necessary for conducting the activity.</li>
            <li>Flip chart/Butcher paper for each break out group.</li>
            <li>Markers (multiple colors) for creating power maps.</li>
            <li>Color stickies for labeling or showing different types of information on power maps.</li>
            <li>Photograph participant power maps after the session for recording (with participants permission).</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Design for what you want! Customize the facilitation guide to fit your desired purpose, needs, and outcomes for conducting this activity.</li>
            <li>Identify the collective purpose of mapping power and money in your community. E.g. Is this for a specific campaign, issue, target the community is wanting to influence? The purpose can be established in advance or participants can set as part of the activity.</li>
            <li>Identify how much time you will need for each discussion and activity. The total suggested time for this activity is 60 minutes. The group work and show and tell is where you will likely allocate most of the time.</li>
            <li>Identify the anticipated number of breakout groups based on who is participating. If participants are from different communities, consider grouping by communities as well.</li>
            <li>Schedule time after your activity to debrief with the facilitators on what worked and what you might change if conduct the activity again. Identify any action items for you, your organization or community as an outcome from the activity.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Introducing_the_Activity">
          <h4 class="subcategory">Introducing the Activity</h4>
          <Facilitator>Understanding the power relationships and flows of money and resources that shape the problem we are trying to solve will be crucial to helping us strategize effectively, adapt to new events or changes, and evaluate our progress.</Facilitator>
          <Facilitator>Power mapping is a common community organizing technique used to visually represent who the important stakeholders relevant to an issue are, what types of power they have, and how they relate to one another when it comes to a specific issue or problem. Like other maps, they are supposed to help those who use them orient themselves in relation to the world around them, and help the user find their way. They can be used for specific actions or campaigns with tight timelines and focused objectives, like planning an event, but they can also be used for bigger ongoing efforts, like building a coalition.</Facilitator>
          <Facilitator>What sets them apart from most other maps is that they are likely to change - maybe even a lot! - in response to new events or circumstances. In this case, as the situation around displacement changes -- for example, a new development is planned, or a new policy is put into place -- power maps change too, whenever the power dynamics of a situation change significantly.</Facilitator>
        </template>

        <template slot="Group_Big_Picture_Questions">
          <h4 class="subcategory">Group Big Picture Questions</h4>
          <Facilitator>Has anyone in the room done power-mapping before?</Facilitator>
          <ul>
            <li>
              <strong class="bold">Follow-up with:</strong> How did it go? What did you do/learn?
            </li>
          </ul>
          <Facilitator>We’re curious to hear from you all why you think mapping power might be useful. Does anyone have any ideas or experiences that speak to why we might want to map the power dynamics of around an issue or campaign?</Facilitator>
          <ul>
            <li>
              <strong class="bold">Follow-up with:</strong> MISSING MISSING MISSING MISSING MISSING MISSING MISSING
            </li>
          </ul>
        </template>

        <template slot="Reviewing_the_Basics">
          <h4 class="subcategory">Reviewing the Basics</h4>
          <Facilitator>Let’s recap what we’ve learned so far...</Facilitator>
          <ul>
            <li>
              The
              <strong class="bold">role</strong> of power mapping is to help you orient your group in relation to the other stakeholders involved in the issue you are taking you on, and to help you strategize about how to both build power and change the power relationships between other stakeholders.
            </li>
            <li>
              The
              <strong class="bold">goal</strong> of a power map is to clearly represent the power relationships between the stakeholders involved in the issue you are taking on.
            </li>

            <li>
              The
              <strong class="bold">core elements</strong> of a useful power map include:
              <ul>
                <li>
                  All of the relevant stakeholders (individuals, groups, institutions, etc.)
                  <br>For example: the mayor, tenants, city planners, allied community groups
                </li>
                <li>
                  The types of power that stakeholders have (individually or together)
                  <br>For example: political power, people power, financial resources, land ownership.
                </li>
                <li>
                  The relationships between stakeholders
                  <br>Who is allied with who? Who is opposed to who? Who has power over who?”
                </li>
              </ul>
            </li>
          </ul>

          <Facilitator>Let’s review a couple of examples to help you become more familiar</Facilitator>

          <ul>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
          </ul>

          <Facilitator>As you can see, power maps can take many different forms, and what they look like will likely evolve as you refine your analysis of the situation, and as new events or changes occur. It’s a very flexible tool. At the same time, all of the examples have the same core elements previously mentioned:</Facilitator>

          <ul>
            <li>They show who the key “actors” or stakeholders are,</li>
            <li>They show how the actors are related to one another,</li>
            <li>They show how power is embedded in these relationships.</li>
          </ul>
        </template>

        <template slot="Producing_Power_Maps_in_Groups">
          <h4 class="subcategory">Producing Power Maps in Groups</h4>
          <Facilitator>As you can see, power maps can take many different forms, and what they look like will likely evolve as you refine your analysis of the situation, and as new events or changes occur. It’s a very flexible tool. At the same time, all of the examples have the same core elements previously mentioned:</Facilitator>
          <Instructions>Adapt as circumstances or events change.</Instructions>
        </template>
        <template slot="Show_and_Tell">
          <h4 class="subcategory">Show and Tell</h4>
          <Facilitator>As you can see, power maps can take many different forms, and what they look like will likely evolve as you refine your analysis of the situation, and as new events or changes occur. It’s a very flexible tool. At the same time, all of the examples have the same core elements previously mentioned:</Facilitator>
          <Instructions>Adapt as circumstances or events change.</Instructions>
        </template>
        <template slot="Discussion_and_Planning">
          <h4 class="subcategory">Discussion and Planning</h4>
          <Facilitator>As you can see, power maps can take many different forms, and what they look like will likely evolve as you refine your analysis of the situation, and as new events or changes occur. It’s a very flexible tool. At the same time, all of the examples have the same core elements previously mentioned:</Facilitator>
          <Instructions>Adapt as circumstances or events change.</Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="$t('toolkits.stories')">
        <p>At the close of the activity, consider any asks of the group to support community mobilizing efforts and actions in and outside the space created today.</p>
        <ul>
          <li>Take your power map home and see how others in your circle might add to your map!</li>
          <li>Try leading your own mapping activity in the community.</li>
          <li>Ask if there are other spaces or people to engage in a mapping power and money activity.</li>
          <li>Use the maps to inform the development of strategies and tactics for their community.</li>
        </ul>
      </TakingAction>

      <AdditionalResources :toolkit="$t('toolkits.stories')"></AdditionalResources>
    </div>
  </main>
</template>


<script>
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
};
</script>