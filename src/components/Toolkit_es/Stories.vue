<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>El reconocer las raíces ancestrales al igual que conectar nuestras propias historias con la historia de la migración y los lugares/espacios donde residimos hoy, es una forma potente para conectar la historia individual con la de la comunidad. Compartir nuestras historias puede unir a las comunidades y ayudar a conectar la migración y el desplazamiento. Las comunidades pueden utilizar esta actividad para:</p>
        <ul>
          <li>Reconocer la perdida de tierra por las/los indígenas y las tribus.</li>
          <li>Elevar la importancia de nombrar y reclamar los espacios de aquellas/os originalmente desplazados, y</li>
          <li>Visualizar las historias de migración y desplazamiento de la comunidad.</li>
        </ul>
        <p>Al contar nuestras historias, podemos individual y colectivamente interrumpir el desplazamiento en nuestras comunidades.</p>
        <p>La guía de facilitación siguiente describe cómo utilizar esta actividad, y está diseñada para ser adaptada a las necesidades de su comunidad.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <p>Explorar las conexiones entre la migración y el desplazamiento de los residentes.</p>
          <p>Compartir nuestras historias de cómo llegamos - y luchamos por quedarnos en – nuestras comunidades, y reflexionar sobre el éxito de organizarnos en contra del desplazamiento.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Entendimiento y ejemplo común sobre cómo el desplazamiento ha impactado nuestras comunidades.</li>
            <li>Historias compartidas sobre la conexión entre migración, gentrificación y desplazamiento.</li>
            <li>Una narrativa común que impulse la acción a nivel local y construya relaciones más profundas con otras comunidades que enfrentan retos similares.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <ul>
            <li>Miembros/es de la comunidad que han experimentado desplazamiento o temor de ser desplazados en una comunidad específica. El taller se desarrolla en 3 secciones de trabajo concretas (reflexión individual, compartir en pareja o grupos de tres, y conversación en plenario).</li>
            <li>Los/las/les facilitadores deben de analizar a través de quién es mejor invitar para este tipo de debate, el tamaño ideal del grupo, etc. Estos factores pueden depender de cuánta confianza exista entre los posibles participantes, la variedad de experiencias en la sesión, etc. De 6-10 participantes es quizás un buen número meta para la mayoría de los grupos.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identificar 2-3 facilitadores y asignar roles para la sesión, incluyendo un narrador y una persona encargada de llevar el tiempo. Para cada paso, un/una/une facilitador/a/e puede explicar la actividad mientras las/los otros distribuyen los materiales. Para el Paso 3, un/una/une facilitador/a/e debe de tomar notas mientras el otro hace la facilitación de las presentaciones de grupo.</li>
            <li>Para preparase para esta actividad, las/los/les facilitadores deben de investigar e identificar el nombre o los nombres de las comunidades indígenas que ocuparon/ocupan la tierra donde la sesión se está realizando.</li>
            <li>Marcador gigante</li>
            <li>Rotafolio</li>
            <li>Suficientes lapiceros, lápices y marcadores</li>
            <li>Cinta de Pintor o Cinta Adhesiva de Protección (masking tape)</li>
            <li>Pañuelitos</li>
            <li>Copias impresas de <a href="/handouts/Stories-Worksheet.pdf">las hojas de trabajo</a></li>
            <li><ExternalLink href="/handouts/Stories-Tree-Stencil.pdf" target="_blank">Plantilla de un árbol (imprimir, recortar, y pegar)</ExternalLink>, o <ExternalLink href="/handouts/Stories-Tree-24x24.pdf" target="_blank">impresión de un árbol tamaño natural</ExternalLink></li>
            <li><ExternalLink href="/handouts/Stories-Fruit.pdf">&quot;Fruta&quot; impresa y cortada</ExternalLink> o figuras cortadas de cartulina</li>
            <li>Contar cuántos grupos pequeños habrán. Para cada grupo, trazar un árbol en una hoja de rotafolio.</li>
            <li>Crear un &quot;río&quot; hecho de cartulina azul en una de las paredes, o dibujar uno utilizando varias hojas de rotafolio. Durante las presentaciones, los arboles serán colocados a lo largo del río.</li>
            <li>Hacer un plan como facilitador/a/e de cómo apoyar a los/las/les participantes si las actividades provocan emociones fuertes, que saque a la luz traumas, o tristezas, y, ver cómo concluir la actividad.
            </li>
            <li>Identificar una &quot;zona de descanso&quot; en otra sala o separado del espacio donde está ocurriendo el taller principal donde las personas puedan ir si necesitan sobrellevar momentos emocionales difíciles.
            </li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Esta actividad requiere de suficiente tiempo de preparación. Alocar al menos 2 horas con amistades para pintar las hojas de trabajo, crear las plantillas de árboles, delinear los árboles, cortarlos, cortar las frutas, crear el río, y tener listos todos los materiales.</li>
            <li>Cada grupo debe colocarse alrededor de un árbol – ideal sería tener varias mesas redondas, 1 para cada grupo.</li>
            <li>Música de fondo puede crear un ambiente agradable, y también ayudar a indicar cuando cada una de las actividades ha llegado a su fin.</li>
            <li>La actividad debe ser planificada con suficiente tiempo para manejar cualquier trauma emocional o alegría que surja durante la sesión. Las/los/les facilitadores deben de pensar cuidadosamente el proceso de cierre adecuado para concluir la sesión de manera sana.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 1: Conexión con la tierra (10 min)</h4>
          <Instructions>Antes de iniciar las actividades, reúna al grupo en un círculo amplio para prepararse y conectarse, y &quot;establecer la intención del día&quot;. Empezar por reconocer la tierra indígena que ocupamos. Conectar la conversación a la importancia de crear un espacio seguro y valiente, que empieza con el reconocimiento de la pérdida de las tierras indígenas y la importancia de nombrar y retomar los espacios de quienes fueron inicialmente desplazados.
            <p>Las/los/les facilitadores pueden después considerar abrir con un simple ejercicio de respiración o meditación. Por ejemplo, crear, de forma grupal, el sonido de la lluvia (las/los participantes frotan sus manos, después chasquean los dedos, y palmean sus piernas) o piden a los participantes que cierren sus ojos y nombren uno de sus ancestros o seres queridos que deseen les acompañe en esta actividad. Posteriormente inhalar y exhalar profundo 3 veces todos/as/e juntos/as/e.</p>
            <p>Esto ayuda a dar la pauta y permitir que las/los participantes entren en un espacio mental y emocional que les lleve a evocar recuerdos de su historia migratoria personal en la siguiente actividad. Cerrar esta sección pidiendo al grupo que abran sus ojos y que miren a los ojos de una persona en el círculo (o se puede pedir que coloquen las palmas de sus manos casi tocándose para crear un contacto energético), posteriormente, agradecer a todos/as/es por su participación y apertura a crear un espacio seguro y valiente para este tiempo juntos.</p>
            <p>Las/los participantes pueden decidir no tomar parte de la actividad de apertura y honrar sus prácticas individuales de preparación para hacer presencia en la actividad grupal.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 2: Historia Individuales (10 min: 2 min de explicación, 8 min de trabajo individual)</h4>
          <Instructions>El objetivo de esta sección es iniciar con el trabajo individual. Esta porción de la actividad puede efectuarse en un área en silencio, o con música de fondo suave y apropiada culturalmente. Después de este segmento cada participante debe sentirse más conectado con los elementos de su propia historia migratoria. El entorno de fondo debe ser óptimo para la reflexión individual, permitiendo a los/las/les participantes profundizar o resaltar elementos fundamentales de la historia migratoria personal.
            <p>Todos/as/es los/las/les participantes deben de tener una copia de <ExternalLink href="/handouts/Stories-Fruit.pdf">la hoja de trabajo</ExternalLink>, la que es una hoja de papel dividida en 3 secciones:</p>
            <ol class="facilitator">
              <li>¿Quién es mi gente?</li>
              <li>¿Cómo llegue aquí, y cuáles fueron los principales momentos decisivos y las luchas en el camino?</li>
              <li>¿Qué he aprendido en este caminar?</li>
            </ol>
            <p>Explicar la hoja de trabajo y cada pregunta al distribuirla. Explicar que a las/los participantes en la siguiente fase se les pedirá que compartan sus respuestas, si se sienten cómodos, en grupos pequeños de 3-4 personas.</p>
            <p>Pedirles a todos/as/es que tomen 8 minutos para llenar individualmente la hoja de trabajo.</p>
            <p><strong class="note">NOTA:</strong> Los/las/les facilitadores pueden sugerir que las/los participantes se dispersen en la sala. Tratar de hacer la sala lo más cómoda posible para que cada participante pueda sentarse en el suelo, en una mesa, o en una silla o sillón.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 3: Conversaciones en Grupos Pequeños (35 min)</h4>
          <Instructions>Este intercambio de ideas se basa en el trabajo individual anterior. La meta de este segmento es permitir que las/ los participantes se junten con 1 o 2 otros miembros del grupo e identifiquen similitudes en sus historias personales, y que se den cuenta que no están solos/as/es y que compartan parte de su caminar en la experiencia comunitaria o al combatir el desplazamiento.
            <p>ormar grupos y dar materiales.</p>
          </Instructions>
          <Facilitator>Ahora nos gustaría que formaran pequeños grupos y compartan sus historias. Esperamos que esta sea una forma de conocerse, pero también de aprender las cosas en común de su experiencia al llegar a esta área. Una vez que hayan formado los grupos, permitan que cada uno comparta algo de lo que escribieron. Les recordaremos cuando es el turno de la siguiente persona.
            <p>Al ir compartiendo sus historias, piensen qué cosas y temas en común están surgiendo – utilizarán estas ideas y temas para crear un árbol conjunto que represente la historia del grupo.</p>
            <p>Mientras ustedes conversan, pasaremos materiales de arte para la siguiente parte de la tarde.</p>
          </Facilitator>
          <Instructions>Pedirle a las/los participantes que cuenten para formar grupos de 3-4 personas. A medida que cada persona comparte su historia, favor pedirles también que compartan su pronombre de género también.
            <p>Después de 4 minutos, ver cómo van (ahora es el turno de la siguiente persona si aún no han cambiado) y después de 8 minutos, cambiar otra vez, etc.</p>
            <p>Mientras los grupos están en el intercambio, pasar los materiales. Cada grupo recibe raíces y ramas para cada miembro/e, así como un baúl y unas frutas. Los grupos también reciben una hoja grande de papel, pega, cinta adhesiva y marcadores.</p>
          </Instructions>
          <Facilitator>Como grupo, llenen las raíces y ramas de su árbol. <span class="instructions">(10 min)</span>
            <ul>
              <li>Ahora es hora de completar su historia colectiva. Deben de tener algunos materiales de arte y algunas raíces, ramas y frutas. Como grupo van a utilizar estos materiales para armar una historia colectiva.</li>
              <li>En cada una de sus raíces, escriban una respuesta a la indicación &quot;venimos de ___&quot;</li>
              <li>En cada una de sus ramas, escriban una respuesta a la indicación &quot;luchamos contra ____ para llegar aquí&quot;</li>
            </ul>
            <p>Ahora pasen a la fruta. <span class="instructions">(5 min)</span></p>
            <ul>
              <li>¿Cómo se imaginan el futuro de sus comunidades? Al pensar en las posibilidades para sus comunidades en el futuro, escriban cada una de esas posibilidades en una fruta y cuélguenla en el árbol.</li>
            </ul>
            <p class="instructions">Al finalizar la actividad, inviten a que los grupos siembren sus árboles a lo largo de río.</p>
          </Facilitator>
          <Facilitator>¿Qué historia creamos en conjunto? Les invitamos a que cada grupo traiga su árbol, sus historias colectivas, al frente y las peguen a lo largo del río. Una vez que lo hagan, tomen un receso, coman algo, y también sean testigos de las historias de los otros grupos. Nos reuniremos de nuevo en 10 minutos. En ese momento también le daremos a cada una(o) una oportunidad para compartir su árbol con el resto del grupo.</Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 4: Compartir en plenario (20 min)</h4>
          <Instructions>La meta de esta sección es pasar de las narrativas personales a las conexiones en grupos pequeños, hasta llegar a las experiencias compartidas entre todo el grupo. Al final de compartir, las/los participantes deben estar conscientes de las paralelas en las experiencias y reflexionar sobre las lecciones aprendidas e historias comunes.
            <p>Dar la bienvenidas después del receso</p>
            <p>Pedir a cada grupo que pase uno por uno a su árbol y compartan qué aprendieron con esta actividad. Ejemplos de preguntas guías:</p>
            <ul class="facilitator">
              <li>¿Qué sobresale para ustedes de su historia común?</li>
              <li>¿Qué cosa se les hizo difícil en su grupo?</li>
              <li>¿Qué cosas notaron tenían en común?</li>
              <li>¿Cuál fue un momento de creatividad? ¿Cuándo aprendieron algo nuevo?</li>
              <li>¿Por qué escogieron esas raíces/ramas?</li>
              <li>¿Cuáles son sus visiones del futuro?</li>
            </ul>
            <p>A medida que mencionan cosas en común, luchas, y momentos de creatividad, escribirlos en el río con marcadores de manera creativa.</p>
            <p>Si hay tiempo, abrir el espacio para una discusión en plenario sobre las mismas preguntas guía al leer los temas escritos en el río.</p>
          </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <p>At the close of this activity, ask the group to consider other populations and partners that should participate in a story sharing exercise.</p>
        <ul>
          <li>Identificar otros posibles participantes (ej. Jóvenes) que deberían de tener la experiencia de la actividad de compartir historias. ¿Hay oportunidades para una conversación inter-generacional?</li>
          <li>Inscribir a nuevos/as/es participantes a campañas o al boletín informativo de la organización para mantener la participación activa.</li>
          <li>Crear una representación visual de las áreas de dónde vienen las/los participantes y de dónde residen hoy en Massachusetts. Se puede utilizar un mapa del mundo con chinches e hilo de tejer colorido para rastrear la historia migratoria del grupo.</li>
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
  import ExternalLink from '../ExternalLink';

  export default {
    name: "workshops",
    components: {
      ExternalLink,
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
