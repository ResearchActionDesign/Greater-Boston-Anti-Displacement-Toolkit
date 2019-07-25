<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Statistics—like rent increases, number of families paying more than one-third of their income for housing, or the number of evictions per year—can oftentimes take on a life of their own, and can get twisted in support of developers and gentrifiers instead of community. In Chelsea, we&#39;ve seen this happen when city officials use a percentage of affordable housing units as a way of promoting more market rate or luxury housing to &quot;balance out&quot; the diversity of our housing stock.</p>
        <p>But, when they&#39;re combined with stories and testimony from real-life experiences, data and statistics can be powerful tools to fight displacement—working together to become more powerful tools than either could be alone. This activity focuses on how to practice combining stories and data to make arguments against displacement. Communities can use this activity to:</p>
        <ul>
          <li>Pair stories with data points to help make it harder for elected officials and others to dismiss the stories as unbelievable or isolated cases.</li>
          <li>Ground community stories with the data to also show how they&#39;re part of bigger trends.</li>
        </ul>
        <p>The facilitation guide below outlines how to conduct this activity, and is intended to be adapted to fit your community needs.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          To practice using data and storytelling to communicate information and make arguments about communities and neighborhoods.
        </div>
        <div slot="Workshop_Outcomes">
          Community members use stories and data to inform and persuade their communities (or elected officials) to take a particular course of action.
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Whom specifically to invite depends on the context—the &quot;Convince Me!&quot; activity could be a great way to prepare to testify at an upcoming public hearing or council meeting, or it can be a way to practice making arguments. In either case, it&#39;s helpful if some people in the room have direct experience with political struggle over displacement, so they&#39;ll have a sense of how specific elected officials are likely to respond to different arguments.</p>
          <p>Think about some of the stakeholders you identified in the Mapping Power &amp; Money activity—they could either be people to invite, or people to practice making arguments to. Ideally, you would want a minimum of 8 participants (3 to be the &quot;actors&quot; and 5+ to be the &quot;convincers&quot;).</p>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Flip-chart paper and markers</li>
            <li>3 signs to identify &quot;actors,&quot; which can be made out of file folders cut in half with holes punched in 2 of the corners with string ran through them long enough to hang around someone&#39;s neck</li>
            <li>Printed copies of a neighborhood infosheet (either the sample one provided, on one you create yourself)</li>
          <li>Masking tape or painter&#39;s tape</li>
            <li>Identify a note taker, timekeeper, and 2 facilitators for the session. It&#39;s ideal to have 2 facilitators for this workshop so that 1 person can take the &quot;actors&quot; aside to prep them.</li>
            <li>Create and print a handout listing relevant statistics about displacement in your community (or use the sample one provided in the toolkit).</li>
            <li>Set up the room with a bit of open space to serve as the &quot;stage&quot; for the &quot;Convince Me!&quot; activity. Using tape, label &quot;start&quot; and &quot;finish&quot; lines along the floor in this space, with about 8 paces between the 2 lines. The photo below illustrates an example of how the activity could be set up:<img src="../../assets/workshop_images/using_data/RoomSetup.png" :alt="$t('altText.usingDataRoomSetup')"></li>
            <li><p>Pick a realistic situation where members of your community might be trying to convince an elected official or other stakeholder of something. Some examples:</p>
              <ul>
                <li>You&#39;re at a city council meeting trying to argue for an affordable housing bond that will create 1,000 new, subsidized apartments.</li>
                <li>A developer is asking for a rezoning request to build a new condo development, and you&#39;re trying to convince potential allies that they should be concerned about the potential displacement.</li>
              </ul>
            </li>
            <li>Based on the situation you chose, pick 3 specific people who would need to be convinced.
              <ul>
                <li>Specific names are better than generic categories, especially for someone everyone knows.</li>
                <li>Community members will volunteer to pretend to be these people during the activity, so it&#39;s helpful that the people you name won&#39;t be in the room, but whom members of your organization or community members are relatively familiar with.</li>
                <li>It could also be good to contrast 1 of the 3 names as someone already likely to be sympathetic to your cause, or have 1 of your members volunteer to play themselves, which could help highlight the contrast between arguments convincing to the community vs. convincing to particular stakeholders.</li>
                <li>Note: If you have a particularly engaged/knowledgeable group and have more time, you could complete this step in the room with the group rather than choosing stakeholders ahead of time.</li>
              </ul>
            </li>
            <li>Write the names of the 3 people you chose on the character signs.</li>
            <li>For each of the 3 specific people, write out some quick notes on their priorities, their likes/dislikes, and their personality. One of the facilitators will share this info with the &quot;actors&quot; as they prep. This can be pretty informal, or you could choose to write up half-page bios for each character with photos.</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>It can sometimes be hard to get a group to open up and get into the spirit of the game, so feel free to jump in and model the activity yourself.</li>
            <li>Determine how much time you have for this session—if closer to an hour, you could take time to define a situation and choose stakeholders as a group. If it&#39;s a shorter session—around a half-hour)—you&#39;ll need to come into the room with your situation all ready to go. If you&#39;ve done the Mapping Power &amp; Money activity, you could use the stakeholders identified in that activity.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 1: Welcome — Frame Your Purpose &amp; Agenda (5 min)</h4>
          <Facilitator><span class="instructions">Introduce the purpose of this workshop.</span>
            <p>Today, we&#39;re going to practice using stories and data to convince elected officials or other
              decision-makers to take action against displacement. We&#39;ll start by reviewing some statistics about
              this area, and then play a game to practice using statistics to convince people.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 2: Warm-Up — What Strategies Can We Use to Convince People? (optional: 10 min)</h4>
            <Facilitator>Think of the last time you tried to convince someone of something, like getting someone to help out with
              a household chore they didn&#39;t want to do, or in an organizing context, like lobbying an elected
              official to vote a certain way. What did you do to convince them? How did it go?</Facilitator>
            <Instructions> Ask participants to share stories as they think of them. After each story, follow up to try
              to identify what worked as a tactic/strategy, and list them to post at the front of the room. Close out by
              quickly debriefing the conversation with identified strategies.</Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Step 3: &quot;Convince Me!&quot; Activity (30-45 min)</h4>
              <Facilitator> &quot;Convince Me!&quot; was originally developed by Catherine D&#39;Ignazio and Rahul
                Bhargava as part of the Data Culture Project (go to <a
                    href="https://databasic.io/en/culture/convince-me">https://databasic.io/en/culture/convince-me</a>
                for the original).
                <ul>
                  <li>This activity is all about considering data as evidence to convince people—remembering that data
                    is just one part of what it takes to convince people! It&#39;s most powerful when used in
                    combination with stories.
                  </li>
                  <li>It&#39;s also important to tailor your argument to your audience: What assumptions are they
                    making? What alternative explanations might have they learned that you need to disprove? In the
                    context of displacement, &quot;redevelopment is good for the neighborhood&quot; or &quot;this area
                    was vacant already, so nobody is being displaced&quot; are common examples.
                  </li>
                </ul>
              </Facilitator>
          <Facilitator><span class="instructions">Hand out infosheet to the group.</span>
                  <ul>
                    <li>This infosheet <b>TODO: ADD LINK</b> lists some statistics about the impact of displacement in Everett and Chelsea,
                      if you want to use this information to try and convince stakeholders. But also feel free to draw
                      from your own experiences and stories! On the back, there&#39;s a list of resources about
                      different ways to use data.
                    </li>
                    <li>Take 3-5 minutes to review the infosheet by yourself.</li>
                    <li>Is there anything that&#39;s confusing or you have questions about?</li>
                  </ul>
                  <p class="instructions">Take a few minutes to answer quick questions here, but also try to avoid getting into a
                    big discussion at this point in the session.</p>
                    <ul>
                      <li>Imagine you&#39;re trying to convince someone to [the scenario you&#39;ve chosen for this
                        activity]. How would you do it using the facts on this infosheet coupled with your personal
                        experience? Take a few minutes to write some sample arguments on your own.
                      </li>
                    </ul>
          </Facilitator>
                    <Facilitator><span class="instructions">Take about 5 minutes for folks to write down sample arguments on paper.</span>
                      <ul>
                        <li><span class="instructions">(Optional - if time remaining)</span> Now, find a partner and practice your arguments on each other. Take a few turns going back and forth to practice making your arguments to each other.
                        </li>
                        <li>To do this activity, we need 3 volunteers to be the &quot;actors&quot;, and play people we might want to convince.
                        </li>
                      </ul>
                    </Facilitator>
                      <Instructions>Hold up the signs and ask, &quot;Who wants to be ___?&quot; If the group is shy,
                        you might need to assign people to roles.
                        <ul>
                          <li>As people volunteer, have them come up to the front and put the sign around their neck.
                          </li>
                          <li>Once all 3 &quot;actors&quot; have volunteered, ask that group to go off to the side with
                            1 of the facilitators to prep:
                            <ul>
                              <li>Review the situation with them.</li>
                              <li>Review each of their characters and discuss what might (and might not) convince
                                them.
                              </li>
                              <li>Explain the rules of the game. If your character is convinced, move a pace forward. If
                                not, stay in place.
                              </li>
                              <li>If there&#39;s time, the &quot;actors&quot; could do some quick warm-ups to get in
                                character.
                              </li>
                            </ul>
                          </li>
                          <li>While the actors are prepping, take a minute as a group to discuss what folks know about
                            these 3 characters—what might it take to convince them? Write these ideas on the flip-chart
                            paper.
                          </li>
                          <li>Once the actors return, have them line up at the &quot;start&quot; line.</li>
                        </ul>
                      </Instructions>
          <Facilitator><span class="instructions">Ask the actors to introduce their characters to the audience.</span>
                          <p>Now, we&#39;re going to try convincing these people that they should fight gentrification
                            and displacement in Chelsea and Everett. We&#39;re going to take turns making arguments
                            using the data from the infosheet. If you think your character would be convinced by an
                            argument, move a pace forward. Otherwise, stay in place.</p>
                        </Facilitator>
                          <Instructions>You could find a volunteer from the group or model this yourself. Either way,
                            go to the &quot;finish&quot; line, face the group of actors, and make a sample argument.
                            <ul>
                              <li>As a facilitator, you may want to ask &quot;Are you convinced?&quot; to the actors
                                at the end to remind them to move a pace forward and/or stay in place.
                              </li>
                              <li>Continue getting volunteers from the group to come up and make arguments, until at
                                least 1 (or all!) of the actors reach(es) the finish line.
                              </li>
                            </ul>
                          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Step 4: Debrief (5-10 min)</h4>
                            <Instructions>Ask different people to explain why they made the arguments they did, and ask
                              the stakeholders why something convinced them or not.
                              <p>Highlight similarities in the arguments people made, or arguments that worked for one
                                audience but not another. Point out strong uses of data in support of arguments to start
                                a conversation about how to use data in appropriate ways to convince people.</p>
                              <ul class="facilitator">
                                <li>Did any of the arguments try to make one of the stakeholders feel guilty?</li>
                                <li>How did you use data? Did the data show a big change?</li>
                                <li>Were there any arguments which worked well for one stakeholder, but not for the
                                  others?
                                </li>
                                <li>How did it feel to make an argument that failed? How did it feel to succeed?</li>
                              </ul>
                              <p>Write notes for the discussion on flip-chart paper in front of the group.</p>
                            </Instructions>
        </template>

      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <ul>
        <li>What are upcoming public meetings or hearings where you could practice your skills making arguments against displacement?</li>
        <li>Could you schedule 1-on-1 meetings with stakeholders to share stories and data?</li>
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