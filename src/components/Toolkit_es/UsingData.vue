<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>Las estadísticas, tales como el aumento de los alquileres, el número de familias que pagan más de un tercio de sus ingresos por vivienda o el número de desalojos por año, muchas veces pueden cobrar vida propia y pueden distorsionarse en apoyo de los inversores inmobiliarios y gentrificadores, en vez de la comunidad. En Chelsea, hemos visto que esto sucede cuando los/las/les funcionarios/e de la ciudad utilizan un porcentaje de unidades de vivienda asequible como una forma de promover una mayor tasa de mercado o viviendas de lujo para &quot;equilibrar&quot; la diversidad del inventario de viviendas.</p>
        <p>Pero, cuando se combinan con historias y testimonios de experiencias de la vida real, los datos y las estadísticas pueden ser herramientas poderosas para combatir el desplazamiento, trabajar juntos/as/e para convertirse en herramientas más poderosas de lo que podrían ser por separado. Esta actividad se centra en cómo practicar la combinación de historias y estadísticas para presentar argumentos en contra del desplazamiento. Las comunidades pueden usar esta actividad para:</p>
        <ul>
        <li>Enlazar historias con estadísticas para dificultar que funcionarios/e electos y otros descarten las historias como no creíbles o aisladas.</li>
        <li>Sustentar las historias comunitarias con estadísticas para demonstrar cómo son parte de tendencias más grandes.</li>
        </ul>
        <p>La siguiente guía de facilitación describe cómo llevar a cabo esta actividad, y está diseñada para adaptarse a las necesidades de su comunidad.</p>
      </Introduction>

      <FacilitationGuide :toolkit="toolkit">
        <!-- Purpose and Outcome -->
        <div slot="Workshop_Purpose">
          Practicar el uso de estadísticas y la narración de cuentos para comunicar información y preparar argumentos sobre comunidades y vecindarios.
        </div>
        <div slot="Workshop_Outcomes">
          Los/las/les miembros de la comunidad usan historias y estadísticas para informar y persuadir a sus comunidades (o autoridades electas) para tomar un determinado curso de acción.
        </div>

        <!-- Who to Invite -->
        <template slot="Whom_to_Invite">
          <p>A quién invitar específicamente depende del contexto: la actividad &quot;¡Convénceme!&quot; Podría ser una excelente manera de prepararse para testificar en una próxima audiencia pública o reunión del consejo, o puede ser una forma de practicar la formulación de argumentos. En cualquier caso, es útil si algunas personas en el salón tienen experiencia directa en la lucha política acerca del desplazamiento, así tendrán una idea de cómo específicos funcionarios/e electos podrían responder a diferentes argumentos.</p>
          <p>Piense en algunas de las/los/les actores claves que identificó en la actividad Mapeando el Poder &amp; Dinero. Pueden ser personas a las que hay que invitar o personas a quienes se le dirigirán los argumentos. Idealmente, usted querrá un mínimo de 8 participantes (3 para ser los &quot;actores&quot; y 5+ serán quienes &quot;buscarán convencer&quot;</p>
        </template>

        <!-- Materials and Preparation -->
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Rotafolios, papelógrafo y marcadores.</li>
            <li>3 señales para identificar a los &quot;actores&quot;, que se pueden hacer a partir de carpetas de archivos cortadas por la mitad con agujeros perforados en 2 de las esquinas con una cuerda lo suficientemente larga como para colgar del cuello de alguien</li>
            <li>Copias impresas de una hoja informativa sobre el vecindario (ya sea la muestra que se proporciona o una que usted mismo cree)</li>
            <li>Cinta adhesiva o cinta para pintar.</li>
            <li>Identifique un/a/e encargado/a/e de tomar notas, moderador/a/e de tiempo y 2 facilitadores para la sesión. Es ideal tener 2 facilitadores para este taller para que 1 persona pueda preparar a los &quot;actores&quot;.</li>
            <li>Cree e imprima un folleto con las estadísticas relevantes sobre el desplazamiento en su comunidad (o use el ejemplo que se proporciona en el manual).</li>
            <li>Prepare la habitación dejando un poco de espacio abierto para que sirva de &quot;escenario&quot; para la actividad &quot;¡Convénceme!&quot;. Con cinta, marque las líneas de &quot;inicio&quot; y &quot;finalización&quot; a lo largo del piso en este espacio, con aproximadamente 8 pasos entre las 2 líneas. La foto de abajo ilustra un ejemplo de cómo se podría configurar la actividad: <img src="../../assets/workshop_images/using_data/RoomSetup.png"></li>
            <li>Elegir una situación de la vida real en la que los/las/les miembros de su comunidad estén intentando convencer a un funcionario/e electo u otro actor/e clave de algo. Algunos ejemplos:</li>
            <ul>
              <li>Estás en una reunión del consejo municipal tratando de defender un bono de vivienda asequible que creará 1,000 apartamentos subsidiados nuevos</li>
              <li>Un inversor inmobiliario está solicitando una solicitud para cambio en la zonificación para desarrollar una nueva área de condominios, y usted está tratando de convencer a aliados potenciales de que deberían preocuparse de un posible desplazamiento.</li>
            </ul>
          </ul>
          <ul>
            <li>En función de la situación que elija, seleccione 3 personas específicas que necesitarían ser convencidas.</li>
            <ul>
              <li>Los nombres específicos son mejores que las categorías genéricas, especialmente si es alguien que todos conocen.</li>
              <li>Los/las/les miembros de la comunidad se ofrecerán como voluntarios para simular ser estas personas durante la actividad, por lo que es útil que las personas que nombre no estén en la sala, pero que sean miembros de su organización o miembros de la comunidad con los cuales los miembros están relativamente familiarizados.</li>
              <li>También podría ser bueno contrastar y que 1 de los 3 nombres sea alguien que probablemente simpatice con su causa, o hacer que uno de sus miembros se ofrezca voluntariamente para jugar el papel de sí mismo, lo que podría ayudar a resaltar el contraste entre los argumentos que convencen a la comunidad y los que convencen a ciertos actores claves.</li>
            </ul>
            <p>Nota: Si tiene un grupo especialmente comprometido / informado y tiene más tiempo, puede completar este paso en la sala con el grupo en lugar de elegir a los actores claves ​​antes.</p>
            <li>Escribir los nombres de las 3 personas que eligió en las señales de personajes.</li>
            <li>Para cada una de las 3 personas específicas, escribir algunas notas rápidas sobre sus prioridades, sus gustos / aversiones y su personalidad. Uno de los/las/les facilitadores compartirá esta información con los &quot;actores&quot; mientras se preparan. Esto puede ser bastante informal, o puede optar por escribir biografías de media página para cada personaje con fotos.</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>A veces puede ser difícil lograr que un grupo se abra y se involucre en el propósito del juego, así que puedes modelar la actividad tú mismo.</li>
            <li>Determina cuánto tiempo tienes para esta sesión, si es alrededor de una hora, puedes tomarte un tiempo para definir una situación y elegir a los actores claves como grupo. Si es una sesión más corta (alrededor de media hora), deberás entrar al salón con su situación lista para comenzar. Si ha realizado la actividad <router-link :to="{ name: 'Mapping', params: {locale: $i18n.locale}}">Mapeando el Poder y Dinero</router-link>, podría utilizar a los actores identificados en esa actividad.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 1: Bienvenida: Presenta tu propósito y agenda (5 min)</h4>
          <Facilitator><span class="instructions">Introducir el propósito de este taller.</span>
            <p>Hoy, vamos a practicar el uso de historias y estadísticas para convencer a los/las/les funcionarios/es electos u otros tomadores de decisiones para se posicionen en contra del desplazamiento. Comenzaremos revisando algunas estadísticas sobre esta área, y luego jugaremos un juego para practicar el uso de las estadísticas para convencer a la gente.</p>
          </Facilitator>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 2: Calentamiento: ¿Qué estrategias podemos usar para convencer a las personas? (opcional: 10 min)</h4>
          <Facilitator>Piensa en la última vez que intentaste convencer a alguien de algo, como pedirle a alguien que te ayude con una tarea doméstica que no querías hacer, o en un contexto de organización, como presionar a un/una funcionario/e electo para que vote de cierta manera. ¿Qué hiciste para convencerlos? ¿Cómo te fue?</Facilitator>
          <Instructions>Pedir a los participantes que compartan historias mientras se les van ocurriendo. Después de cada historia, dar seguimiento para tratar de identificar lo que funcionó como táctica / estrategia y enumérelas para anotar en la parte delantera de la sala. Finalice dando a conocer rápidamente las estrategias identificadas durante lo conversado.</Instructions>
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <h4 class="subcategory">Paso 3: Actividad &quot;¡Convénceme!&quot; (30-45 min)</h4>
          <Facilitator> &quot;¡Convénceme&quot; fue desarrollado originalmente por Catherine D&#39;Ignazio y Rahul Bhargava como parte del Data Culture Project / Proyecto de Cultura de Datos (visita <a href="https://databasic.io/es/culture/convince-me">https://databasic.io/es/culture/convince-me</a> para el original).
            <ul>
              <li>Esta actividad consiste en considerar los datos como evidencia para convencer a las personas, ¡Recuerda que los datos es sólo una parte de lo que se necesita para convencer a las personas! Son más poderosos cuando se usan en combinación con historias.</li>
              <li>También es importante adaptar tu argumento a tu audiencia: ¿Cuáles son sus suposiciones? ¿Qué explicaciones alternativas podrían haber aprendido que necesitas refutar? En el contexto del desplazamiento ejemplos comunes son: &quot;la reurbanización es buena para el vecindario&quot; o &quot;esta área ya estaba vacía, por lo que no se está desplazando a nadie&quot;</li>
            </ul>
          </Facilitator>
          <Facilitator><span class="instructions">Entregar la hoja informativa al grupo.</span>
            <ul>
              <li>Esta hoja informativa <b>TODO: ADD LINK</b> enumera algunas estadísticas sobre el impacto del desplazamiento en Everett y Chelsea, por si deseas utilizar esta información para tratar de convencer a los actores claves. ¡Pero también siéntete libre de extraer datos de tus propias experiencias e historias! En la parte posterior, hay una lista de recursos sobre diferentes maneras de usar los datos.</li>
              <li>Tomen entre 3 y 5 minutos para revisar la hoja informativa.</li>
              <li>¿Hay algo que esté confuso o sobre lo que tienen preguntas?</li>
            </ul>
            <p class="instructions">Tomar unos minutos para responder preguntas rápidas aquí, pero en esta parte de la sesión también trata de evitar involucrarte en una gran discusión.</p>
            <ul>
              <li>Imagina que estás tratando de convencer a alguien de [el escenario que has elegido para esta actividad]. ¿Cómo lo harías utilizando los datos en esta hoja informativa junto con tu experiencia personal? Solo, tómate unos minutos para escribir algunos ejemplos de argumentos.</li>
            </ul>
          </Facilitator>
          <Facilitator><span class="instructions">Programar unos 5 minutos para que la gente escriba en un papel ejemplos de argumentos.</span>
            <ul>
              <li><span class="instructions">(Opcional, si queda tiempo)</span> Ahora, encuentra un compañero y practiquen sus argumentos entre ustedes. Tómen turnos para practicar cómo expresar sus argumentos entre sí.
              </li>
              <li>Para realizar esta actividad, necesitamos 3 voluntarios para ser los &quot;actores&quot;, e interpretar a las personas que queramos convencer.</li>
            </ul>
          </Facilitator>
          <Instructions>Sostener los letreros y preguntar: &quot;¿Quién quiere ser ___?&quot; Si el grupo es tímido, es posible que tengas que asignar los personajes.
            <ul>
              <li>En la medida que las personas se ofrezcan voluntariamente, pídeles que vengan al frente y pongan el letrero alrededor de su cuello.</li>
              <li>Una vez que los 3 &quot;actores&quot; se hayan ofrecido como voluntarios, pedir a ese grupo que se vaya a un lado con 1 de los/las/les facilitadores para prepararse:
                <ul>
                  <li>Repasar la situación con ellos.</li>
                  <li>Repasar cada uno de sus personajes y discutir lo que podría (y no podría) convencerlos.</li>
                  <li>Explicar las reglas del juego. Si tu personaje está convencido, avanza un paso. Si no, mantente en tu lugar.</li>
                  <li>Si hay tiempo, los &quot;actores&quot; podrían hacer algunos calentamientos rápidos para entrar en el personaje.</li>
                </ul>
              </li>
              <li>Mientras los actores se preparan, tomar un minuto como grupo para hablar sobre lo que la gente sabe acerca de estos 3 personajes. ¿Qué tomaría convencerles? Escriban estas ideas en el papelógrafo.</li>
              <li>Una vez que los actores regresan, haga que se alineen en la línea de &quot;inicio&quot;.</li>
            </ul>
          </Instructions>
          <Facilitator><span class="instructions">Pedir a los actores que presenten sus personajes a la audiencia.</span>
            <p>Ahora, intentaremos convencer a estas personas de que deben luchar contra la gentrificación y el desplazamiento en Chelsea y Everett. Vamos a turnarnos presentando argumentos utilizando los datos de la hoja informativa. Si crees que tu personaje se convencería por uno de los argumentos presentados, avanza un paso. De lo contrario, mantente en tu lugar.</p>
          </Facilitator>
          <Instructions>Podrías encontrar un voluntario del grupo o modelarlo tú mismo. De cualquier manera, vaya a la línea del &quot;final&quot;, enfrente del grupo de actores y presente un ejemplo de argumento.
            <ul>
              <li>Como facilitador/a/e, es posible que desees preguntar a los actores &quot;¿Estás convencido?&quot; y recordarles que avancen y / o se mantengan en su lugar.</li>
              <li>Continúa recibiendo voluntarios del grupo para que participen y formulen sus argumentos, hasta que al menos 1 (o todos) de los actores lleguen a la línea de meta.</li>
            </ul>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <h4 class="subcategory">Paso 4: Comentar (5-10 min)</h4>
          <Instructions>Pedir a diferentes personas que expliquen por qué presentaron los argumentos que presentaron y preguntar a los actores claves por qué les convenció algo o no.
            <p>Resaltar las similitudes en los argumentos que presentaron las personas o los argumentos que funcionaron para una audiencia, pero no para otra. Señalar el uso acertado de las estadísticas para fortalecer los argumentos para iniciar una conversación sobre cómo usar los datos de manera adecuada para convencer a las personas.</p>
            <ul class="facilitator">
              <li>¿Algún argumento presentado fue con el propósito de hacer sentir culpable a uno de los actores claves?</li>
              <li>¿Cómo se usaron las estadísticas? ¿Presentar las estadísticas hizo un gran cambio?</li>
              <li>¿Hubo algún argumento que funcionó bien para un actor clave, pero no para otros?</li>
              <li>¿Cómo se sintió presentar un argumento que falló? ¿Cómo se sintió tener éxito?</li>
            </ul>
            <p>Hacer anotaciones en el rotafolio frente al grupo sobre los comentarios</p>
          </Instructions>
        </template>

      </FacilitationGuide>

      <TakingAction :toolkit="toolkit">
        <ul>
          <li>¿Cuáles son las próximas reuniones públicas o audiencias en las que podrías practicar tus habilidades para presentar argumentos contra el desplazamiento?</li>
          <li>¿Podrías programar reuniones con los actores claves para compartir historias y estadísticas?</li>
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
