<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Las comunidades en todo el país están experimentando amenazas a sus hogares y vecindarios. Hay muchos modelos de políticas y estrategias que las comunidades pueden adoptar para proteger el lugar donde viven. Esta sección del taller está destinada a involucrar y desarrollar ideas y soluciones impulsadas por la comunidad.</p>
        <p>Las comunidades pueden usar esta actividad para:</p>
        <ul>
        <li>Generar ideas y soluciones por y desde la comunidad,</li>
        <li>Identificar modelos de políticas y estrategias que funcionen,</li>
        <li>Recopilar el conocimiento de la comunidad sobre cómo se pueden adoptar diferentes modelos de políticas y estrategias,</li>
        <li>Identificar necesidades y vacíos en la información necesaria para avanzar con una política o estrategia específica.</li>
        </ul>
        <p>Las políticas y estrategias identificadas pueden utilizarse para influir en los/las/les tomadores de decisiones y educar a otros miembros de la comunidad sobre problemas y posibles soluciones. Esta actividad informa la planificación para organizar, desarrollar y promover una política o estrategia específica para adoptar en su comunidad.</p>
        <p>La siguiente guía de facilitación describe cómo llevar a cabo esta actividad, y está diseñada para adaptarse según las necesidades de su comunidad.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <ul>
            <li>Identificar políticas y estrategias específicas, que hemos utilizado o que usan otras comunidades para proteger sus hogares.</li>
            <li>Evaluar qué políticas y estrategias podemos considerar adoptar y promover en nuestra comunidad.</li>
          </ul>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Aprendimos y documentamos políticas y estrategias que conocemos y / o utilizamos como propuestas para combatir el desplazamiento.</li>
            <li>Identificado lo que sabemos y necesitamos saber (plan de acción) para considerar propuestas de políticas y estrategias específicas para nuestra comunidad.</li>
            <li>Se evaluó si una propuesta o estrategia de política específica funcionará en su comunidad.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>A quienes invites (o excluyas) dependerá en gran medida del propósito (¿Por qué hacerlo?) y los resultados de organizar esta actividad en tu comunidad (¿Qué deseas saber / obtener al final?). Lo ideal sería que hubiese un mínimo de 6 participantes que representen una amplia gama de experiencias para compartir y discutir diferentes políticas y estrategias que conocen o que han visto que otros usan para proteger sus hogares.</p>
          <p>Una vez que esto haya sido identificado, entonces pregunta:</p>
          <ul><em>
          <li>¿Quién puede ayudar a cumplir este propósito?</li>
          <li>¿Quién es el/la/elle más relevante para esta actividad?</li>
          <li>¿Quién podría representar una amenaza para lograr el propósito?</li>
          </em>
          </ul>
          <p>Por ejemplo:</p>
          <ul><li>Se ha propuesto un nuevo complejo de uso mixto (vivir, trabajar, jugar) que se extenderá a lo largo de dos cuadras en el centro en la comunidad, lo que potencialmente podría brindar nuevas oportunidades de empleo, vivienda y servicios. La comunidad se está organizando actualmente para proteger a los/las/les habitantes y negocios existentes y garantizar que el complejo sea beneficioso para los/las/les habitantes y negocios existentes. Puedes invitar a habitantes de la comunidad y dueños de negocios ubicados en el área que se está desarrollando o cerca de la misma, organizaciones u organizadores claves en el área que están luchando en contra de este complejo y cualquier otra persona que pueda verse directamente afectada por este proyecto de desarrollo.</li>
          <li>La gentrificación y el desplazamiento son preocupaciones crecientes para tu comunidad y los alrededores. Más y más habitantes están siendo expulsados ​​de sus hogares debido al aumento en el costo de la vivienda. Puedes trabajar con la comunidad para identificar y explorar soluciones para abordar el problema invitando a defensores de viviendas, defensores ambientales, miembros de la comunidad en la actualidad y en el pasado, o representantes de instituciones, por ejemplo, de escuelas locales u organizaciones de atención médica. Una representación amplia de participantes puede ayudar a iniciar una conversación sobre posibles políticas y estrategias que la comunidad puede adoptar y promover para combatir el desplazamiento.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identificar 1-2 facilitadores y asigne roles para la sesión, incluidos 1 encargado/a/e de tomar notas y 1 moderador/a/e del tiempo. (Si son 2 facilitadores, los 2 pueden rotar roles, por ejemplo, 1 facilita y el otro toma notas y modera el tiempo).</li>
            <li>Imprimir <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas.pdf" target="_blank">hojas de trabajo en blanco de diálogos</a> para cada participante.</li>
            <li>Imprimir <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas-Ejemplos.pdf" target="_blank">ejemplos de hojas de trabajo</a> para cada facilitador/a/e. <strong>Nota</strong> : Si es útil, los ejemplos de la hoja de trabajo se pueden imprimir y compartir con los participantes.</li>
            <li>Lapiceros y lápices para escribir en hojas de trabajo.</li>
            <li>Rotafolio / papelógrafo (en blanco) para capturar acciones compartidas y discusiones</li>
            <li>Marcadores para rotafolio / pepelógrafo</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>¡Diseña lo que quieras! Personaliza la guía de facilitación para que se ajuste a tus propósito, necesidades y resultados deseados.</li>
            <li>Determina el propósito grupal de esta actividad y considera adoptarla y promoverla en tu comunidad (por ejemplo, <em>¿Es esto para una campaña, un problema o un objetivo específico sobre el cual la comunidad desea influir?</em>).</li>
            <li>Identifica cuánto tiempo necesitarás para cada discusión y actividad (tiempo sugerido: 60 minutos). El ejercicio de Generación de ideas (Parte 1) va un poco más rápido: 5 minutos por tu cuenta y 10-15 minutos para compartir con otros/as/es. Probablemente pasarás más tiempo (alrededor de 30 minutos) haciendo el trabajo de grupo de Evaluación de Políticas y Estrategias (Parte 2) y los momentos para compartir.</li>
            <li>Con base en quiénes participan identifica el número de grupos de trabajo.</li>
            <li>Programa un tiempo después de la actividad para evaluar con los/las/les facilitadores sobre lo que funcionó y lo que podría cambiar si se vuelve a realizar la actividad. Identifica las acciones para ti, tu organización o comunidad.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <h4 class="subcategory">Parte 1: Generación de ideas (15 min)</h4>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h5>Paso 1: Introducción (5 min)</h5>
          <Facilitator>En la Parte 1 de este ejercicio, nos gustaría conocer qué políticas y estrategias han utilizado o han observado que han sido usadas en otras comunidades. Esta es la visión de ideas sobre qué políticas y estrategias creen pueden ayudar a proteger el lugar donde vivimos. En este ejercicio, no hay respuestas correctas o incorrectas.
            <p>Recuerda: ¡nadie lo sabe todo y juntos/as/e sabemos mucho! Nuestro objetivo es compartir el mayor número de ideas con los demás.</p>
            <p>En la Parte 2 de este ejercicio, seleccionaremos algunas ideas para profundizar en la evaluación de lo que ya sabemos y necesitamos saber para considerar si pueden ser adoptadas en nuestra comunidad.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h5>Paso 2: Trabajo Individual (5 min)</h5>
          <Instructions>Distribuir la Parte 1 de la <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas.pdf" target="_blank">hoja de trabajo</a> a los participantes.
            <p>Pedir a los participantes que tomen aproximadamente 5 minutos para anotar solos: (1) <em>¿Cuál es la política o estrategia?</em> y (2) <em>una breve descripción de cómo la han usado o visto cómo se usa?</em>.</p>
            <p>Si es útil, puedes pensar en compartir una de las siguientes indicaciones:</p>
            <ul class="facilitator">
            <li>Piensen en las políticas y estrategias como una visión o plan de acción para lograr un objetivo específico. Este plan establece las pautas de cómo se logra hacer algo o no. Las políticas y estrategias guían la toma de decisiones dentro de diferentes sistemas e instituciones, por ejemplo, gobierno a nivel de la ciudad / estado, corporaciones, escuelas, etc.).</li>
            <li>Piensen en sus propias historias y experiencias en la lucha contra el desplazamiento utilizando sus propios ejemplos de movimiento y migración. Esto podría ser dónde viven ahora o han vivido anteriormente.</li>
            <li>Piensen en una ocasión en la que hayan presenciado cómo una comunidad protege con éxito sus hogares ¿Cómo hicieron esto?</li>
              <li>Compartir <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas-Ejemplos.pdf" target="_blank">tarjetas de ejemplo encontradas</a> de otros métodos que las comunidades hayan considerado y adoptado con éxito.</li>
            </ul>
            <p>Compartir que el objetivo de este ejercicio es obtener el mayor número de ideas posibles en un corto tiempo, simplemente anota los pensamientos e ideas a medida que vayan fluyendo.</p>
            <p>Indagar si los participantes tienen alguna pregunta sobre el ejercicio antes de comenzar el reloj.</p>
            <p>Si es útil, puedes compartir ejemplos para la Parte 1, que se encuentran <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas-Ejemplos.pdf" target="_blank">AQUÍ</a>. Comienza el tiempo y recuérdales a los participantes que les restan 2 minutos para trabajar solos y luego hacer otro recordatorio cuando les resta un minuto.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h5>Paso 3: Compartir en Plenario (5 min)</h5>
          <Instructions>Pedir a los participantes que mencionen sus ideas a como las vayan pensando y describan brevemente cómo ayudaron / pueden ayudar en nuestras comunidades.
            <p>Compartir las ideas anotadas en el rotafolio / papelelógrafo para que los participantes las revisen en grupo.</p>
            <p>Si les gustaría ampliar la lista, el/la/elle facilitador/a/e puede compartir ejemplos de la Parte 1, encontrados <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas-Ejemplos.pdf" target="_blank">AQUÍ</a> sobre otras políticas y estrategias que las comunidades han considerado y adoptado para ponderar y examinar en la Parte 2 del ejercicio.</p>
            <p>Una vez el grupo haya compartido y generado una lista de ideas para considerar, pase a la Parte 2 del ejercicio para profundizar en algunas de las ideas enumeradas.</p>
          </Instructions>
          <h4 class="subcategory">Parte 2: Evaluación de políticas y estrategias (25-30 min)</h4>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h5>Paso 1: Introducción (5 min)</h5>
          <Facilitator>Para la Parte 2, nos gustaría saber cómo creen que las políticas y estrategias identificadas en la Parte 1 podrían usarse en nuestras comunidades.
            <p class="instructions">Para este ejercicio, los participantes trabajarán en pequeños grupos. Divida al grupo contando según el número esperado de grupos y participantes.</p>
            <p class="instructions"><strong class="note">NOTA: </strong>Por ejemplo, si tiene 20 participantes y quiere grupos de 4 personas, haga que los participantes cuenten con 1, 2, 3, 4, lo que le dará 5 grupos de 4.</p>
            <ul>
              <li>Cada grupo elegirá 1 política o estrategia de la lista generada en la Parte 1 de este ejercicio para enfocarse. Pueden elegir de las ideas compartidas en el &quot;compartir&quot; con el plenario, o elegir otra idea dentro de su grupo que les interese explorar.</li>
              <li>Está bien si los grupos eligen enfocarse en las mismas políticas y estrategias.</li>
              <li>Una vez el grupo haya elegido su política o estrategia, cada grupo examinará 4 preguntas / áreas:<ol>
                <li>¿Cómo adaptarnos?</li>
                <li>¿Qué se necesita para promover estas políticas / estrategias?</li>
                <li>¿Quién puede ayudar?</li>
                <li>¿Qué oportunidades y barreras existen?</li>
              </ol>
              </li>
              <li>Al final, se les pedirá a los grupos que compartan de nuevo. Estas preguntas pueden ayudar a las comunidades a explorar la información disponible y necesaria para decidir qué acciones deben tomar.</li>
            </ul>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h5>Paso 2: Inmersión en los Grupos (10 min)</h5>
          <Instructions>Repartir a los participantes la Parte 2 de la hoja de trabajo.
            <p>Pedirles a los participantes que se junten en grupos de 2-3.</p>
            <p>Revisar con los participantes los pasos de la hoja de trabajo: (1) Identificar la política o estrategia en que se centrarán y escríbanla en la parte superior de la tabla de la hoja de trabajo, luego (2) Piensen en conjunto las respuestas a las 4 preguntas de la hoja de trabajo.</p>
            <p>Recordar a los participantes que el objetivo es evaluar lo que ya sabemos y lo que necesitamos saber sobre nuestra comunidad.</p>
            <p>Preguntar a los participantes si tienen alguna pregunta sobre el ejercicio antes de comenzar el reloj.</p>
            <p>Si es útil, el/la/elle facilitador/a/e puede compartir ejemplos para la Parte 2, que se encuentran <a href="/handouts/Identificacion-y-Evaluacion-de-Politicas-Ejemplos.pdf" target="_blank">AQUÍ</a>.</p>
            <p>Iniciar el reloj y proporcionar a los participantes un recordatorio de 5, 2 y 1 minuto del tiempo restante para trabajar en sus grupos.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h5>Paso 3: Compartir en Plenario (10-15 min)</h5>
          <Instructions>Pedir a cada grupo que comparta la política o estrategia en la que se enfocaron, y para cada una de las 4 preguntas pedirles que compartan un aspecto sobresaliente de lo que discutieron y documentaron (por ejemplo, cómo piensan que podría adoptarse, una acción específica, etc.).
            <p>Compartir la discusión anotada por los grupos en el rotafolio / papelógrafo para que los participantes la revisen como grupo.</p>
            <p>Después de que cada grupo ha compartido, preguntar a los demás participantes si tienen alguna pregunta o reflexión sobre lo que el grupo compartió.</p>
            <p>Una vez que todos los grupos hayan compartido, reflexionar con los participantes sobre las ideas e información compartidas preguntando</p>
            <ol class="facilitator">
              <li>¿Cuáles considera el grupo podrían ser posibles políticas y estrategias para su comunidad?</li>
              <li>Después de hoy, ¿sobre qué políticas y estrategias les entusiasma aprender más y explorar</li>
              <li>¿Cómo queremos usar las ideas y la información que generamos hoy?</li>
            </ol>
            <p>Reunir las reflexiones compartidas por los grupos en un rotafolio / papelógrafo para que los participantes las vean como grupo.</p>
            <p>Según el propósito de la actividad, los objetivos y los resultados establecidos para organizar esta sesión, concluya la discusión identificando y describiendo los pasos siguientes surgidos como resultado de esta actividad. Por ejemplo, pueden considerar organizar una sesión de planificación para priorizar una o dos políticas y estrategias para que el grupo, la organización o los/las/les miembros de la comunidad se centren en una campaña de promoción. Otro paso puede ser que deseen realizar más investigaciones sobre una o dos políticas / estrategias para decidir si funcionarían en su comunidad. Otro paso sería construir un plan de acción compartido para ayudar a impulsar las políticas y estrategias identificadas en su comunidad.</p>
          </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <p>Al final de esta actividad, considerar cualquier solicitud del grupo para apoyar esfuerzos y acciones de movilización de la comunidad dentro y fuera del espacio creado hoy.</p>
        <ul>
        <li>Utiliza las políticas y estrategias discutidas para influir en los tomadores de decisiones y educar a otros miembros de la comunidad sobre problemas y posibles soluciones.</li>
        <li>Únete a otros grupos y organizaciones locales que conoció hoy que ya están trabajando en la implementación de una o más de las políticas y estrategias en la comunidad.</li>
        <li>Organiza esta actividad con otros miembros de la comunidad y partes interesadas</li>
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