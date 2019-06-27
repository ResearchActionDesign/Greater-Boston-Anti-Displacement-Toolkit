<template>
  <main class="workshop">
    <section aria-label="overview" class="overview">
      <h2 :style="{ color: toolkits[2].color }">{{toolkits[2].name}}</h2>
      <p>{{toolkits[2].question}}</p>
      <img :src="toolkits[2].img" class="tooltipLogo_large" alt>
      <p :style="{ color: toolkits[2].color }" class="bold">Workshop {{toolkits[2].num}}</p>
    </section>

    <div class="workshop_content">
      <section aria-label="introduction" class="introduction">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Introduction</h2>
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
      </section>

      <section aria-label="Purpose and Outcomes" class="Purpose_and_Outcomes">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Purpose & Outcomes</h2>
        <div class="workshop_purpose">
          <h3>Purpose</h3>
          <ul>
            <li>To co-create a visual map of the different systems of power and influence in our communities.</li>
            <li>To discuss how we can use our power maps for action.</li>
          </ul>
        </div>
        <div class="workshop_outcomes">
          <h3>Outcomes</h3>
          <ol>
            <li>Assessment of local and regional political and community environments to help identify opportunities to advocate for change.</li>
            <li>A shared understanding of community stakeholders, power, and money.</li>
            <li>Useable maps to influence and/or leverage identified power and money in the community for identified organizing strategies and tactics.</li>
          </ol>
        </div>
      </section>

      <section aria-label="Who to Invite" class="Who_to_Invite">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Who to Invite</h2>
        <p>Who you invite (or exclude) will largely depend on the purpose (Why do it?) and outcomes (What do you want to know/have at the end?) of organizing a mapping power and money activity in your community.</p>
        <p>Once this has been identified, then ask, Who can help fulfill this purpose? Who is most relevant for this activity? Who might threaten the purpose? For example:</p>
        <ul>
          <li>There is a specific development proposed in the downtown area of your community that will push out renters and a locally owned business. You can target inviting the renters likely to be pushed out, the business owners and consumers who frequent this business. Key organizations or organizers in the area fighting this development. Who else might be directly impacted by this development?</li>
          <li>Gentrification and displacement is a growing concern for your community and the surrounding area. You want to draw attention to and identify opportunities to address the problem. You can target inviting organizations, community members and youth, local business owners, and government representatives to have a broader conversation and discussion of the issues occurring in the community and region. Mapping power and money can help kick-start a conversation for taking collective action.</li>
        </ul>
      </section>

      <section aria-label="Materials and Preparation" class="Materials_and_Preparation">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Material and Preparation</h2>
        <ul>
          <li>Identify facilitators roles for the session, including notetakers and timekeeper.</li>
          <li>Pre-scribe (1) the map “legend”, three things asking participants to show in the power maps for the group exercise, including examples. (2) the questions to address during the show and tell.</li>
          <li>Examples of power maps drawn by other groups can be useful to demonstrate output for the activity but are not necessary for conducting the activity.</li>
          <li>Flip chart/Butcher paper for each break out group.</li>
          <li>Markers (multiple colors) for creating power maps.</li>
          <li>Color stickies for labeling or showing different types of information on power maps.</li>
          <li>Photograph participant power maps after the session for recording (with participants permission).</li>
        </ul>
      </section>

      <section aria-label="Tips" class="Tips">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Tips</h2>
        <ul>
          <li>Design for what you want! Customize the facilitation guide to fit your desired purpose, needs, and outcomes for conducting this activity.</li>
          <li>Identify the collective purpose of mapping power and money in your community. E.g. Is this for a specific campaign, issue, target the community is wanting to influence? The purpose can be established in advance or participants can set as part of the activity.</li>
          <li>Identify how much time you will need for each discussion and activity. The total suggested time for this activity is 60 minutes. The group work and show and tell is where you will likely allocate most of the time.</li>
          <li>Identify the anticipated number of breakout groups based on who is participating. If participants are from different communities, consider grouping by communities as well.</li>
          <li>Schedule time after your activity to debrief with the facilitators on what worked and what you might change if conduct the activity again. Identify any action items for you, your organization or community as an outcome from the activity.</li>
        </ul>
      </section>

      <section aria-label="Detailed Plan" class="Detailed_Plan">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Detailed Plan</h2>

        <section aria-label="Introducing the Activity" class="Introducing_the_Activity">
          <h3>Introducing the Activity</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Understanding the power relationships and flows of money and resources that shape the problem we are trying to solve will be crucial to helping us strategize effectively, adapt to new events or changes, and evaluate our progress.
          </p>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Power mapping is a common community organizing technique used to visually represent who the important stakeholders relevant to an issue are, what types of power they have, and how they relate to one another when it comes to a specific issue or problem. Like other maps, they are supposed to help those who use them orient themselves in relation to the world around them, and help the user find their way. They can be used for specific actions or campaigns with tight timelines and focused objectives, like planning an event, but they can also be used for bigger ongoing efforts, like building a coalition.
          </p>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> What sets them apart from most other maps is that they are likely to change - maybe even a lot! - in response to new events or circumstances. In this case, as the situation around displacement changes -- for example, a new development is planned, or a new policy is put into place -- power maps change too, whenever the power dynamics of a situation change significantly.
          </p>
        </section>

        <section aria-label="Group Big Picture Questions" class="Group_Big_Picture_Questions">
          <h3>Group Big Picture Questions</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Has anyone in the room done power-mapping before?
          </p>
          <ul>
            <li>
              <span class="bold">Follow-up with:</span> How did it go? What did you do/learn?
            </li>
          </ul>

          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> We’re curious to hear from you all why you think mapping power might be useful. Does anyone have any ideas or experiences that speak to why we might want to map the power dynamics of around an issue or campaign?
          </p>
          <ul>
            <li>
              <span class="bold">Follow-up with:</span> MISSING MISSING MISSING MISSING MISSING MISSING MISSING
            </li>
          </ul>
        </section>

        <section aria-label="Reviewing the Basics" class="Reviewing_the_Basics">
          <h3>Reviewing the Basics</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Let’s recap what we’ve learned so far...
          </p>
          <ul>
            <li>
              The
              <span class="bold">role</span> of power mapping is to help you orient your group in relation to the other stakeholders involved in the issue you are taking you on, and to help you strategize about how to both build power and change the power relationships between other stakeholders.
            </li>
            <li>
              The
              <span class="bold">goal</span> of a power map is to clearly represent the power relationships between the stakeholders involved in the issue you are taking on.
            </li>

            <li>
              The
              <span class="bold">core elements</span> of a useful power map include:
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
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Let’s review a couple of examples to help you become more familiar
          </p>
          <ul>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
            <li>Examples Examples Examples Examples Examples Examples Examples</li>
          </ul>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> As you can see, power maps can take many different forms, and what they look like will likely evolve as you refine your analysis of the situation, and as new events or changes occur. It’s a very flexible tool. At the same time, all of the examples have the same core elements previously mentioned:
          </p>
          <ul>
            <li>They show who the key “actors” or stakeholders are,</li>
            <li>They show how the actors are related to one another,</li>
            <li>They show how power is embedded in these relationships.</li>
          </ul>
        </section>

        <section aria-label="Producing Power Maps in Groups" class="Producing_Power_Maps_in_Groups">
          <h3>Producing Power Maps in Groups</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> We’re going to dive right into creating our own power map for resisting displacement. While there are lots of power-mapping formulas out there, our priority is to start with what we know and allow our analysis to guide the structure and form that the map ultimately takes, rather than imposing a predetermined format without knowing in advance whether it’s right for us. That means that today, we’re producing our first draft(s), and we will conclude this exercise by agreeing on a plan for how to synthesize and refine what we’ve produced into the final product (which we know will keep changing). This means that we can focus on being analytical and creative without needing to worry about how every detail is going to be fine-tuned.
          </p>

          <!-- INSTRUCTIONS -->
          <p>
            <strong class="red_bold">INSTRUCTIONS:</strong>
          </p>
          <ul>
            <li>Divide participants up into groups of 2-3 participants</li>
            <li>Every group should have paper, markers, and post-its</li>
            <li>Prompt: Make a map -- a visual representation -- of the power relationships that are shaping [your effort/issue].</li>
            <li>
              Use different shapes, sizes, and arrows to represent the three core elements of power maps[refer to prior flipchart]:
              <ul>
                <li>All of the relevant stakeholders</li>
                <li>The types of power that stakeholders have</li>
                <li>The relationships between stakeholders</li>
              </ul>
            </li>
            <li>How you arrange things on the space of the page is up to your group!</li>
            <li>Hint: it might be helpful to start with post-its so you can move things!</li>
          </ul>
        </section>

        <section aria-label="Show and Tell" class="Show_and_Tell">
          <h3>Show and Tell</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Ask each group to take turns sharing their power map with the larger group. When they do so, they should answer three questions [flipcharted during prep]:
          </p>
          <ul>
            <li>Why did you choose this way of presenting power?</li>
            <li>How would you develop it further?</li>
            <li>How would you use it?</li>
          </ul>
        </section>

        <section aria-label="Discussion and Planning" class="Discussion_and_Planning">
          <h3>Discussion and Planning</h3>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Now that we’ve heard from all the groups, it’s time to step back and reflect on the different power mapping approaches and techniques we have seen emerge from your work. Our goal now is to figure out how to finalize our shared power map so that is useful to our decision-making and strategizing in service of our larger objective.
          </p>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Since power maps are meant to be revised and adapted as circumstances change, let’s start by thinking about the structure and form of the map, rather than the specific content (eg. which actors are included). Thinking about what you have done and seen other groups do…
          </p>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Facilitate open discussion; record comments on flip-charts, one for each core element (Stakeholders, Relationships, Types of Power) divided into two sections (What worked well; What we still need to figure out):
          </p>
          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> What strategies or techniques do you see for representing stakeholders / relationships between stakeholders / types of power in the power maps in the room that you think we should adopt for our shared version?
          </p>
          <ul>
            <li>
              <span class="bold">An alternative way to ask this:</span> What did other groups do that helped you see the stakeholders / the relationships between stakeholders / types of power in a new or clearer way?
            </li>
          </ul>
          <p>Follow-up each comment with:</p>
          <ul>
            <li>How do you think that will make the map more useful for our purposes?</li>
            <li>What do we as a group still need to figure about out how to represent stakeholders / types of power / relationships?</li>
            <li>How do you think that will make the map more useful for our purposes?</li>
            <li>What other information needs have we uncovered? Are there specific forms of research we need to do in order to have the information we need for an effective and actionable power map?</li>
          </ul>
          <!-- INSTRUCTIONS -->
          <p>
            <strong class="red_bold">INSTRUCTIONS:</strong> Facilitator should attempt to synthesize any duplicate/overlapping suggestions, and gain consensus about which ideas/suggestions to incorporate into the final power map.
          </p>

          <!-- FACILITATOR -->
          <p>
            <strong class="red_bold">FACILITATOR:</strong> Now let’s pivot from the structure and format to think more about the content.
          </p>
          <ul>
            <li>How can we use these maps for our decision-making? What decisions do we need to make?</li>
            <li>Where and how can we take action?</li>
            <li>How to go deeper, what else do we need to know, research to make this actionable?</li>
            <li>Are there specific campaigns, efforts…</li>
            <li>Prioritize targets?</li>
            <li>Synthesize maps, what produced</li>
          </ul>

          <!-- INSTRUCTIONS -->
          <p class="bold">
            <strong class="red_bold">INSTRUCTIONS:</strong> Adapt as circumstances or events change.
          </p>
        </section>
      </section>

      <section aria-label="Taking Action" class="Taking_Action">
        <h2 :style="{ borderBottom: '2px solid ' + toolkits[2].color }">Taking Action</h2>
        <p>At the close of the activity, consider any asks of the group to support community mobilizing efforts and actions in and outside the space created today.</p>
        <ul>
          <li>Take your power map home and see how others in your circle might add to your map!</li>
          <li>Try leading your own mapping activity in the community.</li>
          <li>Ask if there are other spaces or people to engage in a mapping power and money activity.</li>
          <li>Use the maps to inform the development of strategies and tactics for their community.</li>
        </ul>
      </section>

      <section aria-label="Additional Resources and Tools" class="Additional_Resources_and_Tools">
        <h2
          :style="{ borderBottom: '2px solid ' + toolkits[2].color }"
        >Additional Resources and Tools</h2>
        <ul>
          <li>
            Organizing for Power, Organizing for Change,
            <a
              href="https://organizingforpower.org/tools/"
              target="_blank"
            >Tools for Campaign Planning</a>
          </li>
          <li>
            Northeast Action Training,
            <a
              href="http://www.ctbh.org/documents/Power_Analysis_Trainer_Training.pdf"
              target="_blank"
            >Power Analysis* - Trainer - Training</a>
          </li>
          <li>
            DFA Training Academy,
            <a
              href="http://greenlining.org/wp-content/uploads/2013/02/PowerMapping.pdf"
              target="_blank"
            >Power Mapping, Charting Strategic Relationships</a>
          </li>
          <li>
            Beautiful Rising,
            <a
              href="https://beautifulrising.org/tool/power-mapping"
              target="_blank"
            >Power Mapping Tool</a>
          </li>
          <li>
            Strategic Concepts in Organizing & Policy Education, SCOPELA Training,
            <a
              href="https://network.progressivetech.org/system/files/SCOPEpresentationonPA.pdf"
              target="_blank"
            >SCOPELA Power Mapping Slides</a>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "workshops",
  computed: {
    ...mapState(["toolkits"])
  }
};
</script>