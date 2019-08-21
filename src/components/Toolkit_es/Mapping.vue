<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Muchos han sufrido los efectos negativos de decisiones corporativas y políticas excluyentes que los han conducido al desplazamiento. Para promover el cambio es fundamental comprender los sistemas de poder en que estas decisiones se llevan a cabo y como tú como miembro/e de la comunidad puedes influenciar el proceso.</p>
        <p>El mapeo de poder y dinero es una actividad útil para involucrar a las comunidades en pensar acerca de las relaciones que impactan los problemas que enfrentan, de los cuales se derivan las estrategias organizativas y tácticas. Esta actividad ayuda a identificar y evaluar el ambiente político local, regional y comunitario en relación a un problema específico a través de:</p>
        <ul>
          <li>La identificación de los/las/les diferentes actores y objetivos específicos para las campañas,</li>
          <li>La identificación de las funciones de los/las/les miembros/es de la comunidad como actores,</li>
          <li>La identificación de las diferentes formas de poder y cómo los diferentes actores y sistemas interactúan y se relacionan,</li>
          <li>El análisis &quot;qué o quién&quot; puede debilitar o fortalecer el poder de la comunidad, y</li>
          <li>La identificación de oportunidades para promover el cambio, donde intervenir.</li>
        </ul>
        <p>La siguiente guía de facilitación describe cómo llevar a cabo esta actividad, y está diseñada para adaptarse a las necesidades de tu comunidad.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          <p>Co-crear un mapa visual de los diferentes sistemas de poder e influencia en nuestras comunidades.</p>
          <p>Debatir cómo podemos usar nuestros mapas de poder para la acción.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <ol>
            <li>Evaluación del ambiente político local, regional, y comunitario para ayudar a identificar oportunidades para promover el cambio.</li>
            <li>Entendimiento muto de los/las/les actores claves, del poder y del dinero en la comunidad.</li>
            <li>Mapas prácticos para influir y/o potenciar el poder y el dinero identificado en la comunidad para estrategias organizativas y tácticas definidas.</li>
          </ol>
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>Las personas que inviten (o excluyan) dependerá en gran medida del objetivo (<em>¿Por qué hacerlo?</em>) y los resultados (<em>¿Qué quieres saber/tener al final?</em>) al organizar una actividad de mapeo de poder y dinero en la comunidad. Lo ideal es tener un mínimo de 8 participantes para dividirlos en grupos más pequeños para la actividad de mapeo.</p>
          <p>Una vez que esto ha sido identificado, entonces preguntarse:</p>
          <ul>
            <li>¿Quién puede ayudar a cumplir este objetivo?</li>
            <li>¿Quién es la persona más relevante para esta actividad?</li>
            <li>¿Quiénes podrían estar en contra de este objetivo?</li>
          </ul>
          <p>Por ejemplo:</p>
          <ul>
            <li>Un proyecto de desarrollo urbanístico que ha sido propuesto para la zona céntrica de la comunidad expulsará a inquilinos y a un negocio de propietarios locales. Puedes identificar/invitar a los/las/les inquilinos/es que probablemente serán expulsados, a los dueños del negocio y a los/las/les consumidores que frecuentan este negocio. Podrías también invitar a organizaciones claves u organizadores en el área que están luchando contra esta urbanización. ¿Quién más podría ser directamente afectado por esta urbanización?</li>
            <li>La gentrificación y el desplazamiento son motivos de creciente preocupación para la comunidad y el área circundante. Tu deseas llamar la atención hacia esto e identificar oportunidades para solucionar el problema. Puedes invitar a las organizaciones locales, los/las/les miembros de la comunidad de todas las edades, empresarios locales y representantes del gobierno para tener un debate más amplio sobre los problemas que están sucediendo en la región. El mapeo de poder y dinero puede ayudar a iniciar una conversación para tomar acción colectiva.</li>
          </ul>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identificar 1-2 facilitadores y asigna las funciones para la sesión, incluyendo al menos 1 encargado/a/e de tomar notas y al menos 1 moderador/a/e del tiempo.</li>
            <li>Escribir las instrucciones de la actividad (ejemplos más adelante) en el rotafolio para:<ul>
              <li>la <strong>Leyenda del mapa</strong> - solicitar a los participantes mostrar los 3 elementos básicos en los mapas de poder para el ejercicio de grupo, incluyendo ejemplos.</li>
              <li><strong>La dinámica Mostrar y Contar -</strong> las preguntas que se abordarán durante esta dinámica</li>
              <li><strong>La discusión y planificación</strong> – escribir cada elemento básico (<em>Actores Claves, Relaciones, Tipos de Poder)</em> en una hoja aparte para tomar notas durante esta actividad. (Utilizar el papelógrafo o rotafolio para pegarlo en la sala antes de tiempo y para usarlo durante la actividad).</li>
            </ul>
            <table>
              <caption>Ejemplos de Rotafolios para Preparar</caption>
              <thead><tr><th>Leyenda del Mapa</th><th>Dinámica de Mostrar y Contar</th><th>Técnicas de Mapeo Discusión y Planificación</th></tr></thead>
              <tbody>
              <tr><td><p><strong>Actores claves:</strong> personas, instituciones, grupos (por ejemplo, alcalde, inquilinos, iglesias, grupos comunitarios, el ayuntamiento).</p>
                <p><strong>Relaciones:</strong> aliados, oposición, autoridades (por ejemplo, aliados cercanos, alcalde, consejo municipal).</p>
                <p><strong>Tipos de poder:</strong> poder político, el dinero, las personas (por ejemplo, iglesias, grupos comunitarios).</p>
              </td>
                <td>
                  <ol>
                    <li>¿Por qué elegiste esta forma de presentar el poder y el dinero?</li>
                    <li>¿Cómo se puede desarrollar más o profundizar en esto?</li>
                    <li>¿Cómo lo utilizarías?</li>
                  </ol>
                </td>
                <td>
                  <p>¿Qué ha funcionado bien?</p>
                  <p>¿Qué es lo que todavía necesitas resolver?</p>
                </td>
              </tr>
              </tbody>
            </table>
            <li>Los ejemplos de mapas de poder elaborados por otros grupos pueden ser útiles para demostrar los resultados de la actividad, pero no son necesarios para la realización de la actividad. (A continuación, se presentan ejemplos en las instrucciones de la actividad).
            </li>
            <li>Rotafolio / Papelógrafo en blanco para cada grupo de trabajo.</li>
            <li>Marcadores de colores para elaborar mapas de poder.</li>
            <li>Notas adhesivas de colores para indicar información variada en los mapas de poder.</li>
            <li>Fotografías de los mapas de poder después de la sesión para efectos de tener un registro (con permiso de los participantes).</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>¡Diseña lo que tú quieras! Personaliza la guía de facilitación para adaptarla al objetivo, necesidades y resultados deseados para la realización de esta actividad.</li>
            <li>Identifica el propósito colectivo - ya sea establecido de antemano o como parte de la actividad -  del mapeo de poder y dinero en tu comunidad <em>(por ejemplo, ¿Es esto para una campaña específica o asunto en que la comunidad quiere influir?)</em></li>
            <li>Determina cuánto tiempo necesitarás para cada discusión y actividad (tiempo sugerido: 60 minutos). Lo más probable es que asignes la mayor cantidad de tiempo para el trabajo en equipo y la dinámica de Mostrar y Contar.</li>
            <li>Identifica la cantidad de grupos de trabajo previstos en función de quién está participando. Si los participantes son de diferentes comunidades, también considera la posibilidad de agruparlos por comunidades.</li>
            <li>Programa tiempo después de tu actividad para evaluar con los/las/les facilitadores lo que funcionó y lo que se podría cambiar si la actividad se realizara de nuevo. Identifica los puntos de acción para ti, tu organización o comunidad.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 1: Introducción de la actividad (5 min)</h4>
          <Facilitator>Comprender las relaciones de poder y el flujo de recursos que configuran el problema que estamos intentando resolver será crucial para ayudarnos a elaborar estrategias de manera eficaz, adaptarnos a los nuevos acontecimientos o cambios, y evaluar nuestro progreso.
            <p>El mapeo-de-poder es una técnica común para organizar comunidades y que es utilizada para representar visualmente a los actores clave respecto de un asunto, los tipos de poder que tienen, y cómo se relacionan entre sí acerca de un problema o asunto específico. Al igual que otros mapas, los mapas de poder ayudan a los usuarios a orientarse en relación con el mundo que les rodea. Estos mapas pueden ser usados para acciones o campañas específicas con cronogramas estrictos y objetivos precisos - como la planificación de una acción o evento - pero también pueden ser utilizados para esfuerzos en curso más complejos, como la creación de coaliciones.</p>
            <p>A diferencia de la mayoría de los mapas, los mapas de poder es probable que cambien - a veces dramáticamente__en respuesta a los nuevos acontecimientos o circunstancias. Cuando hay cambios en la dinámica de poder en torno a una situación de desplazamiento - por ejemplo, se planifica una nueva urbanización o se implementa una nueva política - los mapas de poder también cambian.</p>
            <p>Antes de entrar en más detalles, tomemos un minuto para aprender de las experiencias del grupo.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 2: Preguntas sobre la Visión Global (5 min)</h4>
          <Facilitator>Tenemos curiosidad de saber por parte de ustedes, ¿Cómo o porqué piensan que el mapeo de poder podría ser útil? ¿Alguien tiene algunas ideas o experiencias que nos ayuden a explicar por qué podríamos querer mapear las dinámicas de poder en torno a un asunto o campaña?
            <p class="instructions">A continuación:</p>
            <ul>
              <li>¿Alguien en la sala ha hecho antes mapas de poder?</li>
              <li>¿Cómo te fue? ¿Qué hiciste/aprendiste?</li>
            </ul>
          </Facilitator>
          <Instructions>Reconoce las experiencias (verbales o escritas) compartidas por el grupo. Esta información puede utilizarse para construir o reforzar la revisión de los conceptos básicos de mapeo de poder y dinero en el siguiente paso.</Instructions>

          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 3: Revisar los Conceptos Básicos (5 min)</h4>
          <Facilitator>Resumamos lo que hemos aprendido hasta ahora:
            <ul class="instructions">
                <li>La <strong>función</strong> del mapa de poder es ayudarte a orientar a tu grupo para que reconozcan los/las/les actores clave involucrados en el asunto que quieres cambiar, y ayudarte a elaborar estrategias sobre la forma de construir poder y cambiar las relaciones de poder entre otros actores claves.</li>
                <li>El <strong>objetivo</strong> de un mapa de poder es representar claramente las relaciones de poder entre los/las/les actores clave involucrados en el asunto que deseas abordar.</li>
                <li>Los <strong>elementos básicos</strong> de un mapa de poder útil incluyen:<ul>
                  <li>Los/las/les actores clave y relevantes (individuos, grupos, instituciones, etc.).<ul>
                    <li>Por ejemplo: el/la alcaldesa, los/las/les inquilinos/es, los/las/les planificadores de la ciudad, grupos comunitarios aliados</li>
                  </ul>
                  </li>
                  <li>Los tipos de poder que todos/as/e los/las/les actores clave tengan (individual o colectivamente)<ul>
                    <li>Por ejemplo: el poder político, el poder de la gente, los recursos financieros, la propiedad de la tierra</li>
                  </ul>
                  </li>
                  <li>Las relaciones entre las partes interesadas<ul>
                    <li>¿Quién está aliado con quién? ¿Quién se opone a quién? ¿Quién tiene poder sobre quién?</li>
                  </ul>
                  </li>
                </ul>
                </li>
              </ul>
          </Facilitator>
          <Facilitator>Veamos algunos ejemplos para ayudarnos a estar más familiarizados:

            <ul class="instructions">
              <li><b>Ejemplo #1:</b> Este mapa de la comunidad enfocado en el desplazamiento en Chelsea identifica los diferentes sistemas, cómo se relacionan, y los tipos de poder que mantienen. <img src="../../assets/workshop_images/mapping/Example_1.jpg" :alt="$t('altText.mappingExample1')"></li>
              <li><b>Ejemplo #2:</b> Este mapa de la comunidad enfocado en los asuntos relacionados al desplazamiento muestra y conecta los/las/les diferentes actores, funciones, relaciones y tipos de poder que poseen cada uno de ellos/ellas/elles en la comunidad. <img src="../../assets/workshop_images/mapping/Example_2.jpg" :alt="$t('altText.mappingExample2')"></li>
              <li><b>Ejemplo #3:</b>Este mapa de la comunidad ilustra los diferentes actores involucrados en aprobar una ordenanza para un consejo de política alimentaria en Everett. Muestra cómo los/las/les actores, su influencia y las conexiones del uno con el otro, pueden, en última instancia, funcionar para influir en el Consejo Municipal (el &quot;objetivo&quot;). <img src="../../assets/workshop_images/mapping/Example_3.jpg" :alt="$t('altText.mappingExample3')"></li>
            </ul>
          </Facilitator>
          <Facilitator>Al ser una herramienta muy flexible, los mapas de poder pueden adoptar muchas formas, y la forma que tomen probablemente evolucione a medida que mejora el análisis de la situación y a medida que se producen cambios o nuevos eventos. Al mismo tiempo, todos los ejemplos tienen los mismos <strong>elementos básicos</strong> mencionados anteriormente:
            <ul>
              <li>Ellos muestran quienes son los/las/les &quot;actores&quot; claves o partes interesadas.</li>
              <li>Ellos muestran cómo los/las/les actores están relacionados entre sí.</li>
              <li>Ellos muestran cómo el poder está incorporado dentro de estas relaciones.</li>
            </ul>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 4: Trabajo en Equipo - Producir Mapas de Poder: &quot;El Desplazamiento en Mi Comunidad&quot; (15 min)</h4>
          <Facilitator>Vamos a abocarnos de lleno en la creación de nuestro propio mapa de poder para resistir el desplazamiento. Mientras que hay muchas fórmulas para elaborar mapas de poder, <strong>nuestra prioridad es comenzar con lo que sabemos</strong>, permitiendo que nuestro análisis oriente la configuración del mapa, en lugar de imponer un formato predeterminado sin saber de antemano si es adecuado para nosotros. Eso significa que hoy estamos produciendo nuestro primer borrador(es), y concluiremos este ejercicio al acordar en un plan para sintetizar y refinar el producto final (el cual seguirá cambiando). Esto significa que podemos enfocarnos en ser analíticos y creativos sin preocuparnos de cómo cada detalle va a ser afinado.</Facilitator>
          <Instructions>El mapa de poder debe estar enfocado en el objetivo del grupo. El mapa de poder puede enfocarse en un tema más amplio, tal como resistir el desplazamiento, pero también puede ser centrado en un esfuerzo específico o evento, como una charla política (teach-in) o una elección.
            <ul>
              <li>Agrupa a los/las/les participantes en grupos de 2-3.</li>
              <li>Cada grupo debe tener papel, marcadores y notas adhesivas.</li>
              <li>Pide a cada grupo que haga un mapa - una representación visual - de las relaciones de poder y dinero que configuran su esfuerzo/problema.</li>
              <li>Alienta a los grupos para que utilicen diferentes formas, tamaños y flechas para representar los 3 elementos básicos de los mapas de poder y dinero [consultar los rotafolios anteriores]:<ul>
                <li>Los/las/les <strong>actores claves</strong> relevantes</li>
                <li>Los <strong>tipos de poder</strong> y <strong>dinero</strong> que las partes interesadas tienen</li>
                <li>Las <strong>relaciones</strong> entre los/las/les actores claves</li>
              </ul>
              </li>
              <li>¡Explicar que cada grupo tiene total libertad en cómo organizar su hoja!<ul>
                <li>Compartir esta sugerencia: <span class="facilitator">¡Podría ser útil comenzar con notas adhesivas para que puedan mover las notas de ser necesario!</span></li>
              </ul>
              </li>
            </ul>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 5: Mostrar y Contar (10 min)</h4>
          <Instructions>Pide a cada grupo que se turnen para compartir su mapa de poder y dinero con el grupo más grande. Cuando lo hagan, deben responder las 3 preguntas del rotafolio:
            <ol class="italic">
              <li>¿Por qué elegiste esta forma de presentar el poder y el dinero?</li>
                <li>¿Cómo se puede desarrollar más o profundizar en esto?</li>
                <li>¿Cómo lo usarías?</li>
            </ol>
          </Instructions>
          <h4 class="subcategory">Paso 6: Discusión y Planificación (15-20 min)</h4>
          <Facilitator>Ahora que hemos escuchado a todos los grupos, es hora de reflexionar sobre las diferentes técnicas de mapeo de poder que han surgido de su trabajo. Ahora, nuestro objetivo es averiguar cómo finalizar nuestro mapa de poder compartido para que pueda ser útil y al servicio de nuestros objetivos más importantes.
            <p>Debido a que los mapas de poder están ideados para ser revisados y adaptados al cambiar las circunstancias, comencemos a pensar sobre la estructura y la forma del mapa, en lugar del contenido específico (por ejemplo, cuáles actores están incluidos).</p>
            <p><span class="instructions">Abrir el debate preguntando al grupo: </span> ¿Qué has hecho y visto a otros grupos hacer hoy?</p>
            <p>¿Qué <strong>estrategias o técnicas que representan a las/los/les actores claves / relaciones entre las/los/les actores claves / tipos de poder</strong> en los mapas de poder en la sala piensas que debemos adoptar para nuestra versión conjunta?</p>
            <ul>
              <li><span class="instructions">Una forma alternativa para preguntar esto: </span> ¿Qué hicieron otros grupos que te ayudó a visualizar a <strong>las/los/les actores claves / las relaciones entre las/los/les actores claves / tipos de poder</strong> en una nueva forma o en una forma más clara?</li>
              <li><span class="instructions">Dar seguimiento a cada comentario con:</span> ¿Cómo crees que podemos hacer el mapa más útil para nuestros propósitos?</li>
            <li>¿Qué es lo que nosotros como grupo necesitamos todavía entender para representar a <strong>las/los/les actores claves / tipos de poder / relaciones?</strong></li>
            <li><span class="instructions">Dar seguimiento a cada comentario con: </span> ¿Cómo crees que podemos hacer el mapa más útil para nuestros propósitos?</li>
            <li>¿Qué <b>otra información</b> hemos descubierto? ¿Existen formas específicas de investigación que necesitamos aplicar para tener suficiente información para un mapa de poder efectivo y factible?</li>
            <li><span class="instructions">Dar seguimiento a cada comentario con: </span> ¿Cómo crees que podemos hacer el mapa más útil para nuestros propósitos?</li></ul>
          </Facilitator>
          <Instructions>Durante esta discusión, tú o el/la/elle encargado/a/e de tomar notas anotarán los comentarios en rotafolios - 1 para cada elemento básico (Actores, Relaciones, Tipos de Poder) dividido en 2 secciones (1. ¿Qué ha funcionado bien? 2. ¿Qué es lo que todavía tenemos que entender?). Durante la discusión, intenta sintetizar cualquier sugerencia duplicada o coincidente, y obtener el consenso acerca de cuáles ideas/sugerencias incorporar en el mapa de poder final.</Instructions>
          <Instructions>Dependiendo del tamaño del grupo y la cantidad de mapas de poder creados, tú y el grupo podrán decidir si es necesario perfeccionar la estructura y el formato de los mapas de poder antes de discutir el contenido. Por ejemplo, el grupo puede decidir tomar elementos de varios de los mapas presentados para crear un mapa de poder conjunto, único. En este caso, podría tener sentido facilitar una actividad de seguimiento centrada en diseñar un mapa de poder conjunto, y luego abordar de lleno las preguntas de contenido para que todos trabajen desde el mismo mapa. Alternativamente, podrías centrarte en las preguntas de contenido de uno o dos mapas en función de las prioridades del grupo.
            <p>Si planeas tener una discusión sobre el contenido durante esta actividad, las siguientes preguntas te pueden guiar. El objetivo es asegurar que se tenga en cuenta toda la información relevante sobre tu problema y contexto.</p>
          </Instructions>
          <Facilitator>Ahora vamos a pasar de la estructura y el formato a pensar más sobre el <strong>contenido.</strong> Aquí, queremos reflexionar sobre los/las/les actores claves, los tipos de poder, y las relaciones, y entender si existen vacíos en nuestra comprensión que debemos abordar y cómo hacer estos mapas factibles.
            <ul class="instructions">
              <li>En primer lugar, revisa los/las/les actores claves que se han enumerado. ¿Hay alguna persona, grupo u organización que no tiene representación? Si es así, ¿Existe un consenso sobre la inclusión de elles, o necesitamos más información?</li>
              <li>En segundo lugar, reflexiona sobre los tipos de poder que han sido sugeridos. ¿Alguien logra ver formas en que podemos catalogar de manera más precisa los diferentes tipos de poder? ¿Hay algún tipo de poder que piensas que afecta el problema del desplazamiento, pero que todavía no han sido tomado en cuenta?</li>
              <li>Por último, examina las relaciones entre los/las/les actores claves. ¿ Han sido señaladas todas las conexiones importantes? ¿Existen vacíos en nuestra comprensión? y, si es así, ¿Cómo podemos completarlos? ¿Necesitamos más información?</li>
            </ul>
          </Facilitator>
          <Instructions>Por otro lado, de acuerdo al tiempo disponible y la composición y objetivos del grupo, puedes también decidir concentrarte en involucrar al grupo en una discusión acerca de cómo utilizar los mapas de poder para la acción. Si esto es o no apropiado en esta etapa dependerá de cuánto planeas revisar y sintetizar los mapas después de la actividad. Si planeas tener esta discusión durante la actividad, las siguientes preguntas pueden guiarte.</Instructions>
          <Facilitator>Hacer al grupo estas preguntas para discutir cómo el grupo puede utilizar los mapas de poder para la acción.
            <ul class="instructions">
              <li>¿Cómo podemos utilizar estos mapas para nuestra toma de decisiones? ¿Qué decisiones necesitamos tomar?</li>
              <li>¿Dónde y cómo podemos tomar acción?</li>
              <li>¿Qué más necesitamos saber, investigar para hacer esto factible?</li>
              <li>¿Existen campañas específicas, esfuerzos a priorizar?</li>
              <li>¿Hay metas concretas a priorizar?</li>
              <li>¿Cómo queremos sintetizar los mapas producidos aquí?</li>
              <li>¿Cómo queremos adaptar los mapas a medida que las circunstancias, eventos cambien?</li>
            </ul>
          </Facilitator>

          <Instructions>Anotar los comentarios en notas adhesivas para colocarlas en las partes más pertinentes del mapa. Por ejemplo, si el grupo identifica una acción para un actor específico, entonces ubicarías esa acción junto al actor/e en el mapa.</Instructions>

        </template>
      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <p>Al cierre de la actividad, considera pedir al grupo apoyar los esfuerzos de movilización de la comunidad y las acciones dentro y fuera del espacio creado hoy.</p>
        <ul>
          <li>¡Lleva tu mapa de poder a tu casa y comprueba si otros en tu círculo podrían tener algo más que añadir! Si facilitas una actividad de seguimiento para diseñar un mapa único, esto podría ser una excelente tarea en casa para los/las/les participantes, para que participen más voces y regresen a una actividad futura.</li>
          <li>Intenta liderar tu propia actividad de mapeo en la comunidad.</li>
          <li>Pregunta si hay otros espacios o personas para involucrarles en una actividad de mapeo de poder y dinero.</li>
          <li>Utiliza los mapas para informar sobre el desarrollo de estrategias y tácticas para tu comunidad.</li>
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