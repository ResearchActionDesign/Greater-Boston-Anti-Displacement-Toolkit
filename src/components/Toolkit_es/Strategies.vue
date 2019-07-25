<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Estrategias y tácticas en organización comunitaria pueden tomar diferentes formas, desde las más tradicionales como tocar puertas o mesas informativas durante eventos hasta organizar giras de exhibición fotográfica comunitaria. Esta actividad utiliza los recursos de la comunidad e identifica tácticas y estrategias culturales a nivel local para evitar el desplazamiento. Se pueden utilizar tácticas y estrategias artísticas creativas para:</p>
        <ul>
          <li>unir el arte con la organización comunitaria</li>
          <li>movilizar y compartir historias de desplazamiento, y</li>
          <li>ayudar a cambiar la conversación y las políticas</li>
        </ul>
        <p>Es una oportunidad para que los/las/les artistas locales y estandartes culturales exploren modalidades artísticas más creativas e invitar a líderes comunitarios concentrados en formas no convencionales para avanzar el dialogo y la acción comunitaria. Aunque esta actividad se basa en prácticas creativas, se requiere el mismo compromiso de rigor, investigación, y atención a los detalles que en las sesiones sobre políticas tradicionales o actividades regidas por estadísticas.</p>
        <p>La guía de facilitación siguiente delinea como llevar a cabo esta actividad y está diseñada para ser adaptada a las necesidades de sus comunidades.</p>
      </Introduction>
      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <p>Proponer estrategias y tácticas modelos que promueven participación comunitaria inclusiva y detener las nocivas prácticas y políticas que desplazan a comunidades enteras.</p>
          <p>Atraer la participación comunitaria en sesiones creativas de lluvia de ideas que permita explorar estrategias organizativas, culturales, multi-disciplinaria para enfrentar el desplazamiento.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Conocimiento y ejemplo común de cómo el desplazamiento ha impactado nuestra comunidad</li>
            <li>Actores claves crean estrategias y acciones para visibilizar el desplazamiento en toda la ciudad.</li>
            <li>Los/las/les participantes comparten estrategias artísticas y culturales que han resultado en éxitos y en fracasos en campañas anteriores.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Pensar en incluir a artistas locales y trabajadores de la cultura al inicio de esta sesión para que puedan contribuir a identificar estrategias comunitarias y tácticas. Estos pueden ser:</p>
          <ul>
            <li>Miembros de la comunidad, organizadores comunitarios, políticos a nivel local, y propietarios de pequeños negocios.</li>
            <li>Artistas de todas las disciplinas, inclusive (pero no únicamente) artistas visuales y de grafiti, bailarines, cantantes, DJ, titiriteros/as/es, etc.</li>
            <li>Periodistas y narradores pueden ofrecer ideas sobre acciones que pueden resultar en mayor visibilidad e impacto</li>
            <li>Lo ideal es tener al menos 6 participantes para tener representación diversa de ideas para compartir y analizar</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
          <li>Identificar 2 facilitadores y asignar roles para la sesión, incluyendo un encargado de tomar notas y un/una/une moderador/a/e de tiempo. Si hay dos facilitadores, los dos pueden intercambiar roles, por ejemplo, 1 persona sirve de facilitador/a/e y el otro como encargado de tomar notas y moderador</li>
          <li>Rotafolio</li>
          <li>Papelógrafo</li>
            <li>Imprimir copias de la <a href="/handouts/Design-Sprint.pdf" target="_blank">hoja de la actividad &quot;Carrera de Diseño&quot; / Design Sprint</a></li>
          <li>Materiales de Arte – marcadores, lápices de colores, crayones, etc.</li>
          <li>Nota adhesivas (Post-it Notes)</li>
          <li>Paquetes de círculos adhesivos de 3 diferentes colores</li>
          <li>Cinta Adhesiva de Protección (masking tape) / Cinta de Pinto</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Poner música durante la actividad &quot;Carrera de Diseño&quot;</li>
            <li>Se debe enfatizar el sentido de apropiación comunitaria, agencia y pertenencia.</li>
            <li>Invitar a los/las/les artistas a que exploren otras disciplinas y acojan un sinnúmero de herramientas creativas al explorar posibles acciones para sobresaltar la lucha en contra del desplazamiento.</li>
            <li>¡Todos los participantes son creadores! Cada participante tiene una perspectiva única, una experiencia cultural y una visión para la representación de problemas sociales. Honrar y validar cada sugerencia para reducir barreras en la participación.</li>
            <li>Tomar en cuenta necesidades de traducción e interpretación y el acceso lingüístico para la audiencia meta</li>
            <li>¡Hacerlo Divertido!</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 1: Preparación &amp; Presentaciones (10 min)</h4>
          <Instructions>El propósito de este ejercicio es identificar todas las formas en que el grupo ha utilizado su capacidad de acción para organizar y abogar por cambios en la comunidad. La siguiente actividad permite que los participantes puedan crear definiciones comunes y un entendimiento del término &quot;organización comunitaria&quot; y generar una lista de actividades de las cuales han sido partícipes en el pasado y actualmente en la organización comunitaria.
            <p>Iniciar la sesión en un círculo. Los/Las/les facilitadores deben de iniciar con una bienvenida y dar la pauta para la sesión del día. Si el taller es parte de una serie, tomen un momento para recordar al grupo de las sesiones previas y el contenido abordado y, después, explicar lo que sigue en la serie. Utilizar una actividad rompehielos o un ejercicio de su preferencia para hacer la transición a la sesión y a las presentaciones. El objetivo final de esta sesión es generar tácticas y herramientas que mezclen el arte con la organización comunitaria.</p>
            <p>Pedir que los participantes se presenten: nombre, y una cosa que adoran sobre su comunidad.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 2: Red en la Organización Comunitaria (7 min)</h4>
          <Facilitator><span class="instructions">Pedir a las/los/les participantes que compartan sus ideas y pensamientos en respuesta a las preguntas siguientes:</span>
            <ul>
              <li>¿En qué piensan cuando oyen el término &quot;organización comunitaria&quot;?</li>
              <li>¿En qué forma están ustedes ya organizando a miembros de su comunidad? (círculos narrativos, tocar puertas, murales comunitarios, etc.)</li>
            </ul>
            <p class="instructions">Anotar todas las sugerencias en un rotafolio. Estar atento y ver si surgen ejemplos que incluyan expresiones artísticas. Algunos ejemplos pueden incluir: tocar puertas, petición del voto, marchas, protestas, y peticiones.</p>
          </Facilitator>
          <Facilitator><span class="instructions">Pedir a las/los/les participantes que revisen la lista en silencio por 2 minutos, y después preguntarles las preguntas siguientes:</span>
            <ul>
<li>¿Qué piensan de las herramientas organizativas que utilizan actualmente? ¿Son efectivas?</li>
<li>¿Qué ha funcionado bien?</li>
<li>¿Cuáles son algunas de las cosas que cambiarían?</li>
</ul>
<p class="instructions">Posteriormente revisar las observaciones y reflexiones de los grupos, y ver si la lista incluye estrategias y tácticas tradicionales o de organización cultural.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 3: Carrera de Diseño (Design Sprint) (15 min)</h4>
          <Instructions>arrera de Diseño (Design Sprint) es una forma de facilitar un &quot;laboratorio de ideas&quot;. Esta hoja de actividad ofrece un marco de referencia a las/los participantes para rápidamente delinear ideas creativas y enfrentar el desplazamiento. Dar a las/los participantes 2 minutos para obtener sus materiales de arte, 3 minutos para surgir con ideas, y después poner la música por 8 minutos mientras las/los participantes ilustran ejemplos de acciones en la plantilla de Carrera de Diseño (8 encasillados – 1 minuto por casilla de diseño). Las/los participantes sabrán que se les ha terminado el tiempo cuando cese la música o se le baje el volumen.
            <p>Encontrar más información sobre la facilitación en la actividad <a href="https://www.iamnotmypixels.com/how-to-use-crazy-8s-to-generate-design-ideas/">Carrera de Diseño</a> (en inglés).</p>
            <p><strong class="note">NOTA:</strong> Esta técnica de facilitación se le llama en otra parte del documento Crazy 8s, pero hemos decidido darle el nombre de &#39;Carrera de Diseño/Design Sprint&#39; en esta caja de herramientas por respeto a las personas con enfermedades mentales que prefieren no utilizar la palabra loco en este tipo de contexto.</p>
          </Instructions>
          <Facilitator>Estamos aquí hoy para pensar en herramientas que podamos utilizar para tener conversaciones con las/los principales actores comunitarios sobre el desplazamiento.
            <p>En un momento vamos a darles una hoja de papel con 8 mini casillas. Esta actividad se llama Carrera de Diseño/ Design Sprint y puede ser utilizada con grupos para ayudarles a generar ideas.</p>
            <p>Tomen unos minutos para pensar en algunas ideas exitosas y en fracasos al organizar.</p>
            <p>Una vez que tengan sus hojas, escriban o dibujen 8 ideas que han utilizado o que han visto utilizar como herramientas para organizar.</p>
            <p>Vamos a poner el cronometro y cuando diga: &quot;Inicien&quot; dibujen una idea en cada casilla hasta que digamos: &quot;Paren.&quot;</p>
            <p class="instructions">Es útil si se comparten ejemplos de estrategias y tácticas organizativas con uso multimedios o culturales para motivar la participación. Algunos ejemplos son:</p>
            <ul class="instructions">
              <li>Murales comunitarios (proceso de creación de mural en Chelsea 2018)</li>
              <li>Giras comunitarias/Caminatas de exhibición de fotos</li>
              <li>Proyecto de Archivo Histórico (colección audio-visual de narraciones de la comunidad, documentación de la historia de la comunidad)</li>
              <li>Películas, organización de diálogos comunitarios sobre el desplazamiento, la movilización y despido de gente.</li>
              <li>Organizar vía digital (redes sociales)</li>

              <li><a href="https://www.wbur.org/artery/2018/11/07/east-boston-gentrification-zumix-stories">Cuentos</a></li>
            <li><a href="https://creativesantafe.org/events/affordable-housing/">Diálogos para alterar el futuro</a></li>
            </ul>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 4: Compartir (13 min)</h4>
          <Facilitator><span class="instructions">Una vez que se ha vencido el tiempo asignado, pedir voluntarios/as para compartir las ideas ilustradas en los esbozos y describirlas de ser necesario. Los/las/les facilitadores anotan las ideas en rotafolios y así captar el mayor número de ideas para que el grupo las analice.</span>
            <p class="instructions">Después de crear una lista completa, pedir a las/los participantes que utilicen puntos de colores para identificar las 3 ideas de mayor relevancia para ellas/os para ser utilizadas por el grupo como herramientas para acciones comunitarias.</p>
            <ul>
              <li>¿Cuáles son algunas de esas ideas principales?</li>
              <li>Preguntas para el grupo: ¿Qué nos gusta? ¿Qué falta?</li>
              <li>¿Cómo podemos imbuir las prácticas organizativas tradicionales con contenido multimedia?</li>
            </ul>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 5: Cierre (5-7 min)</h4>
          <Instructions>Cerrar el taller celebrando la creatividad de todos los participantes. Repasar las 3 principales opciones identificadas por el grupo y determinar los pasos siguientes posibles para implementar las ideas propuestas, por ejemplo, seleccionar la próxima fecha para la reunión para explorar opciones con un subcomité más pequeño, y planificar posibles fechas de implementación.
            <p>Hacer otra vez un círculo para cerrar la sesión de la misma forma en que se inició. Pedir que las/los participantes que compartan &quot;iluminaciones&quot; (resultados positivos) y &quot;crecimientos&quot; (retos o cosas que se deben hacer diferentes la próxima vez) sentidos durante el taller. Las/los participantes pueden cerrar la sesión haciendo un movimiento que todo el grupo repite después de compartir las &quot;iluminaciones&quot; y &quot;crecimientos&quot;. Repetir este proceso con cada miembro/e del círculo y terminar con el agradecimiento de el/la/elle facilitador/a/e por la participación.</p>
          </Instructions>
        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <ul>
          <li>Identificar 2-3 proyectos que el grupo puede realizar.</li>
          <li>Desarrollar un cronograma para realizar 1 de las estrategias culturales identificadas durante el taller.</li>
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
