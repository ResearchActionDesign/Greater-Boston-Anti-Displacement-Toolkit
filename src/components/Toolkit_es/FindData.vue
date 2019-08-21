<template>
  <main class="workshop">
    <ToolkitIntro :toolkit="toolkit"></ToolkitIntro>

    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <p>En combinación con la organización y narración de historias, los datos son una poderosa herramienta para organizarse contra el desplazamiento. Puedes utilizar los datos tanto internamente - para dar seguimiento y para entender mejor los cambios que están ocurriendo en tu vecindario, y externamente - para comunicarte con otros vecindarios, legisladores y promotores del cambio.</p>
        <p>Cuando las comunidades empiezan a organizarse contra el desplazamiento, los/las/les funcionarios/e de la ciudad y los/las/elle inversionistas inmobiliarios suelen utilizar las estadísticas como armas para invalidar las experiencias vividas por los/las/les miembros de la comunidad. Por ejemplo, los/las/les funcionarios/e de la ciudad mencionarán los aumentos del ingreso medio en un área para argumentar que la gentrificación ha beneficiado a la comunidad, y tratar de bloquear el testimonio de habitantes marginados quienes sienten lo contrario. Quizá citarán estudios académicos para respaldar sus afirmaciones y argumentarán que los/las/les miembros de la comunidad no tienen la &quot;el dominio&quot; para &quot;entender&quot; realmente las estadísticas.</p>
        <p>Al utilizar esta sección del manual, ten en cuenta como las estadísticas han sido utilizadas históricamente como armas, especialmente contra la gente negra y morena, y recuerda que los datos cuantitativos y cualitativos son sólo una parte de todo lo que está ocurriendo en tu comunidad.</p>
        <p>Analizar las estadísticas de tu comunidad puede ser una valiosa oportunidad para comparar y contrastar con lo que los/las/les miembros de la comunidad, dentro y fuera de la organización, están experimentando, y contextualizar tales experiencias junto con las de otras comunidades.</p>
        <p>Por ejemplo, si muchos de los/las/les miembros de tu organización han enfrentado notificaciones de desalojo, el revisar las tasas de desalojo de tu comunidad y compararlos con zonas cercanas puede ayudarte a entender si lo que está sucediendo es un aumento en los desalojos a nivel de vecindario, un problema en toda la ciudad, o parte de una tendencia nacional más extensa. Pero hay también mucho que los datos cuantitativos no te dirán - como <em>por qué</em> las personas están siendo desalojadas, cuántas personas están siendo desplazadas por los desalojos informales, cómo se siente el impacto emocional del desplazamiento, o qué estrategias tienen éxito en mantener a las personas en sus hogares.</p>
        <p>Teniendo en cuenta que las estadísticas y los datos son sólo una parte de la imagen global, esta sección del manual te ayudará a iniciar con la revisión de los tipos de datos y estadísticas disponibles acerca de tu comunidad. Podrás identificar los temas de investigación, elegir un área de análisis y buscar datos. Este tema es mucho más amplio de lo que se puede cubrir en esta sección del manual, así que asegúrate de revisar otras excelentes guías sobre este tema, que se enumeran en la <router-link :to="{ name: 'Resources', params: { lang: this.$i18n.locale }}">sección de Recursos</router-link>.</p>
      </Introduction>

      <p><b class="note">NOTA:</b> A diferencia de la mayoría del resto del manual, esta sección está escrita como una guía práctica en lugar de un plan de facilitación. Esta sección del manual podría llevarse a cabo como una actividad, pero también esta sección se puede utilizar para recopilar datos por tu cuenta sin realizar una actividad separada.</p>
      <FacilitationGuide :toolkit="toolkit">
        <template #Title>Guía Práctica</template>
        <!-- Purpose and Outcome -->
        <template #Workshop_Purpose>
            <p>Iniciar la recopilación de datos sobre el impacto del desplazamiento en tu comunidad.</p>
        </template>
        <template #Workshop_Outcomes>
          <ol>
            <li>Identificadas las áreas con problemas o temas donde los datos podrían ser útiles para recopilar.</li>
            <li>Revisadas las diferentes áreas geográficas de análisis.</li>
            <li>Investigados los conjuntos de datos disponibles al público para identificar estadísticas útiles.</li>
          </ol>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>Trabajar con números y datos puede traer bastante ansiedad e inseguridades para algunas personas, y puede también empeorar la dinámica del racismo y el sexismo dentro de una organización.</li>
            <li>Si estás facilitando este manual como una actividad, debes estar alerta si determinadas personas en la habitación empiezan a utilizar sus conocimientos o dominio de los números para dominar la conversación con sus propias opiniones.</li>
            <li>Si estás facilitando este manual como una actividad, dar tiempo y espacio para que la gente pueda compartir sentimientos, y con frecuencia estar atentos para asegurarse de que todos los presentes en la sala participan activamente en la conversación.</li>
          </ul>
        </template>

        <!-- Detailed Plan -->
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <p>En esta sección, vamos a seguir 4 pasos para recopilar datos acerca de tu comunidad:</p>
          <ol>
            <li>Identificar temas y elegir las preguntas.</li>
            <li>Definir el área de análisis.</li>
            <li>Examinar los datos disponibles al público.</li>
            <li>Revisar los datos de acuerdo a tu experiencia.</li>
          </ol>
          <p>Podrías hacer cada uno de estos pasos en un grupo pequeño o en una actividad de mayor tamaño. Hemos incluido algunas notas acerca de cómo podrías facilitar cada sección, sin embargo, debido a que esta sección del manual está escrita más como una guía práctica, no hemos escrito un plan de facilitación detallado.</p>
          <h4 class="subcategory">Paso 1: Identificar los Temas y Seleccionar las Preguntas</h4>
          <p>Antes de empezar a investigar los datos públicos, reflexiona acerca de lo que podrías estar buscando. Si puedes comenzar con una lista de preguntas, después será mucho más fácil examinar cuidadosamente todas las diferentes fuentes de datos y encontrar los elementos de información específicos que serán más útiles para tu organización. Este sería un buen momento para usar parte de la información recopilada y algunas de las ideas generadas durante el Taller de Mapeo de Poder y Dinero, si has hecho esto primero.</p>
          <p>Si estás haciendo esta parte del manual como un taller, esta sección podría funcionar bien como una mezcla de pequeños grupos o parejas y una discusión en plenario con todo el grupo. Podrías facilitar esta sección solicitando a las personas que se emparejen, piensa en las experiencias que ellos han tenido o asuntos que les preocupan, compártelo con el grupo grande, agrupa y prioriza los temas, y luego vuelve a dividir a las personas en grupos temáticos para definir preguntas específicas.</p>
          <p>Comenzar por contestar 2 preguntas:</p>
          <ol>
            <li><em>¿Cuáles son algunos de los problemas que enfrenta tu comunidad relacionados al desplazamiento?</em>
            </li>
            <li><em>¿Cuáles son algunas cosas que la gente en tu organización ha experimentado?</em>
            </li>
            <li>Si hay bastantes respuestas diferentes, podrías agruparlas en áreas temáticas similares, tales como <em>los desalojos</em>, la <em>policía, las escuelas,</em> etc.
            </li>
            <li>Para cada problema identificado, trata de pensar en preguntas que te ayuden a <strong>comprender</strong> mejor ese problema, <strong>convencer a</strong> otros de que se trata de un problema con el que vale la pena involucrarse, o <strong>evaluar</strong> tu propio impacto como organizador/a/e.
            </li>
          </ol>
          <p>Por ejemplo, si se centran en <em>los desalojos</em>, algunos ejemplos de preguntas podrían ser:</p>
          <ul>
            <li><em>¿Cuáles vecindarios en mi ciudad tienen la mayor cantidad o la mayor frecuencia de desalojos?</em></li>
            <li><em>¿Hay determinados arrendadores que están desalojando a las personas con más frecuencia que otros? Si es así, ¿quiénes son?</em></li>
            <li><em>¿Cómo ha cambiado la tasa de desalojo a lo largo del tiempo?</em></li>
            <li><em>¿Qué tipo de impactos en la salud tiene el ser desalojado?</em></li>
            <li><em>¿Cómo afecta a un estudiante tener que cambiar de escuela debido a un desalojo?</em></li>
            <li><em>¿Cuánto le cuesta a la ciudad desalojar a alguien? ¿Es más caro que pagar la representación legal para impedir el desalojo?</em></li>
          </ul>
          <p>Nota: Esta lista de preguntas será tu punto de partida para recopilar datos, pero si tienes aliados/es en tu área con experiencia en manejo de datos, búscalos y pídeles ayuda con los datos - ¡Los/las/les científicos de datos apreciarán realmente que te hayas tomado el tiempo para definir un conjunto de preguntas específicas primero!</p>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Paso 2: Definir el Área de Análisis</h4>
          <p>¡Ahora tus temas y preguntas están definidos! Pero antes de poder comenzar a investigar datos, necesitarás tomar un minuto para pensar en las áreas de análisis - ¿Estás interesado en aprender sobre cuáles <strong>lugares</strong> y <strong>tiempos</strong>? La respuesta a esta pregunta puede cambiar, y puede ser diferente para diferentes temas. Pero tener una idea aproximada de antemano ayudará a delimitar tu búsqueda de información.</p>
          <p>Es probable que tu organización trabaje a nivel del vecindario o de la ciudad. Si trabajas a nivel de la ciudad, podrías estar interesado en los datos de la ciudad como un todo (por ejemplo, <em>¿cuál es la cantidad total de personas desalojadas en mi ciudad?</em>), o podrías estar interesado en comparar las diferentes zonas de la ciudad (por ejemplo, ¿<em>En qué parte de la ciudad se dieron la mayoría de los desalojos?</em>). Si ahora sólo estás revisando datos, recomendamos elegir un área única de análisis como punto de partida, ya sea tu ciudad como un todo o un vecindario en particular. Ten en cuenta que entre más pequeño o más específica sea tu área geográfica de análisis, es menos probable que se dispondrá de datos detallados para cada tema en tu lista.</p>
          <p>Del mismo modo, piensa en qué períodos de tiempo estás interesado en obtener datos. ¿Ha experimentado tu vecindario grandes cambios en los últimos años, o ha estado relativamente estable durante un largo tiempo? Si las cosas han cambiado recientemente, asegúrate de investigar datos recopilados antes y después de que las cosas cambiaron, de manera que puedas hacer un seguimiento del impacto de esos cambios - pero es mejor evitar conjuntos de datos promediados a lo largo de un período de tiempo durante el cual sucedieron los cambios. Si la vecindad ha sido bastante estable por un tiempo, tendrás más flexibilidad en la investigación de las fuentes de datos.</p>
          <p>Si estás haciendo esta parte del manual como un taller, sería mejor, para facilitar esta sección, observar juntos/as/e un mapa grande en físico. Podrías entonces ubicar en el mapa donde vive cada persona y señalar en el mapa los vecindarios que les interesa antes de identificar zonas geográficas censales. Si tú o alguien más en tu organización es miembro/e de la AAA, esta organización enviará gratuitamente mapas impresos de la ciudad que soliciten, y son lo suficientemente grandes como para colgar en la pared, excelentes para talleres como éste.</p>
          <ol>
            <li>Pregúntate: ¿Sobre qué áreas geográficas y período de tiempo me interesa aprender más? Puedes tener diferentes respuestas para cada tema de tu lista.</li>
          </ol>
          <p>Los datos sobre las comunidades generalmente están disponibles en diferentes circunscripciones geográficas, que son definidas por la Oficina del Censo de los Estados Unidos. Desafortunadamente, es posible que las delimitaciones censales no correspondan a lo que consideras tu comunidad, por lo que necesitarás definir qué límites censales coinciden mejor con las áreas en las que estás interesado en investigar. Además, cada circunscripción geográfica tiene diferentes datos disponibles. La siguiente tabla enumera algunos niveles geográficos comunes que puedes encontrar al buscar datos. Ten en cuenta que algunas áreas geográficas censales encajan como muñecas rusas (los condados están compuestos de distritos censales, y éstos se componen de radios censales, que a su vez se componen de cuadras/manzanas), pero las áreas geográficas como códigos postales y ciudades no necesariamente encajan de la misma manera.</p>
          <table>
            <thead>
            <tr>
              <th><strong>Nombre de nivel geográfico</strong></th>
              <th><strong>¿Qué tamaño tiene?</strong></th>
              <th><strong>¿Qué tipo de datos están normalmente disponible?</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Bloque Censal (Census Block)</td>
              <td>Usualmente del tamaño de una cuadra en la ciudad (será diferente en las zonas rurales)</td>
              <td>Cantidad total de habitantes y el desglose por raza, etnia, edad y sexo; cantidad de casas o apartamentos y cantidad de inquilinos vs. propietarios.</td>
            </tr>
            <tr>
              <td>Grupo de Bloques (Census Block Group)</td>
              <td>Varias cuadras combinadas. Usualmente entre 600 y 3,000 personas.</td>
              <td><em>Todo lo anterior, además de</em> información sobre los niveles de ingresos, los alquileres pagados, acceso al transporte, los niveles de educación.</td>
            </tr>
            <tr>
              <td>Sector Censal (Census Tract)</td>
              <td>Varios grupos de bloques censales, que contienen entre 1,200 y 8,000 personas. Los límites del sector censal suelen seguir características tales como las principales carreteras, ríos o fronteras municipales.</td>
              <td><em>Todo lo anterior, además</em> de datos más precisos sobre el ingreso, el porcentaje del ingreso que la gente paga en alquiler o hipoteca, información sobre en qué industrias están empleadas las personas, y el tiempo que toma trasladarse al trabajo. Con frecuencia, las estadísticas de la ciudad sobre desalojos, detenciones o nuevos permisos para vivienda también están disponibles a este nivel.</td>
            </tr>
            <tr>
              <td>Código postal (ZIP code)</td>
              <td>Los códigos postales no son técnicamente un área geográfica, pero algunas fuentes de datos reportan información por código postal de todos modos. Los códigos postales son usualmente más grandes que los sectores censales, pero más pequeños que las municipalidades .</td>
              <td>Los datos censales usualmente no están disponibles en este nivel, pero otros conjuntos de datos nacionales sobre la salud y los desalojos se reportan por código postal.</td>
            </tr>
            <tr>
              <td>Ciudad o Pueblo (también pueblos no incorporados, llamados Lugares Censales)</td>
              <td>Un municipio o lugar.</td>
              <td><em>Todo lo anterior y más</em> datos detallados sobre estadísticas demográficas, ingresos, vivienda, empleo, etc. Los datos sobre los resultados en materia salud a menudo están disponibles en este nivel. Los datos de Zillow sobre alquileres y los precios de las viviendas también están disponibles. La mayoría de las estadísticas de los portales de datos abiertos de la ciudad también están disponibles en este nivel.</td>
            </tr>
            <tr>
              <td>Condado</td>
              <td>Un condado (en algunos estados, como Virginia, un condado o una ciudad incorporada).</td>
              <td><em>Todo lo anterior</em>, así comopatrones de migración de condado a condado (de dónde se muda la gente a tu comunidad). A veces más acceso a otros conjuntos de datos nacionales sobre temas como la salud, vigilancia policíal y la justicia penal.</td>
            </tr>
            </tbody>
          </table>
          <ol start="2">
            <li>Si estás interesado en los datos a nivel de la ciudad o a un nivel superior, ¡puedes parar aquí! Pero, si estás buscando datos a nivel de vecindario, necesitarás hacer una investigación sobre cuáles sectores y grupos de bloques censales conforman tu vecindario. La herramienta por su nombre en inglés, Census American FactFinder, es una manera de encontrar esta información. Visita <a href="https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t">American FactFinder (en inglés)</a>, haz clic en la pestaña &quot;Geographies&quot; en el lado izquierdo y a continuación, haz clic en &quot;Map&quot;. Puedes buscar una dirección o ampliarlo para encontrar tu vecindario y a continuación, selecciona &quot;Census Tract&quot; de la ventana &quot;Select Geographies&quot; en el lado derecho.</li>
          </ol>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Paso 3: Revisar y extraer información de datos públicos</h4>
          <p>Ahora que has identificado temas, seleccionado preguntas, y definido tu área de análisis, te encuentras en un buen lugar para navegar la enorme cantidad de datos públicos. A continuación, hemos enumerado algunos lugares para empezar.</p>
          <p>Si estás haciendo esta parte del manual como un taller, esta sección podría funcionar bien como una &quot;Búsqueda del Tesoro&quot; de datos, en la cual las personas en grupos pequeños navegan por diferentes fuentes de datos y realizan un seguimiento de los datos pertinentes que puedan encontrar. Debes asegurarte que cada grupo tenga acceso a una computadora portátil, una lista de enlaces a fuentes de estadísticas pertinentes, y quizás a una hoja de cálculo para tomar nota de sus conclusiones y la fuente, área geográfica y período de tiempo para cada tipo de estadística. Sería también una buena idea pedir a los grupos que pongan atención sobre cómo se sienten al visitar los diferentes sitios Web y qué tan fácil son para usar, tanto como una forma de iniciar una discusión mayor acerca de quién posee y controla el acceso a las estadísticas, pero también para recordar a los participantes que si encuentran algo que es confuso o difícil de entender, no es su culpa, sino que es probable que las estadísticas no se presenten en forma accesible.</p>
          <p><strong>Consejos</strong></p>
          <ul>
            <li>A medida que estás navegando en estos sitios, mantén en mente tus preguntas y temas.</li>
            <li>A medida que investigas datos en línea, pregúntate a ti mismo, ¿D<em>e dónde provino esta información? ¿Es la fuente confiable? ¿Qué lugar está describiendo? ¿A qué período de tiempo hace referencia?</em></li>
            <li>Mantén buenas notas de donde proviene cada estadística - copia la URL del sitio original, y considera la posibilidad de realizar una captura de pantalla o imprimirla para tenerla como referencia.</li>
            <li>Para algunos temas, podrías encontrar que no hay estadísticas disponibles específicamente para tu comunidad, pero podrías encontrar estadísticas para comunidades similares, o datos del estado o toda la nación.</li>
          </ul>
          <p><strong>Lugares donde realizar investigaciones de datos y estadísticas.</strong></p>
          <ul>
            <li>Boston Data Common Community Profiles (<a href="Https://datacommon.mapc.org/#community-profiles">https://datacommon.mapc.org/#community-profiles</a>), elaborado por Boston Metropolitan Area Planning Council (MAPC), permite la investigación de una comunidad por nombre y tener acceso a un informe por categoría de estadísticas clave acerca de esa comunidad en una variedad de temas.</li>
            <li>United States Census, American FactFinder Community Facts (<a href="Https://factfinder.census.gov/faces/nav/jsf/pages/community_facts.xhtml">https://factfinder.census.gov/faces/nav/jsf/pages/community_facts.xhtml</a>) es una gran herramienta para obtener una visión general de la información demográfica, empleo y vivienda en una zona en particular. Puedes buscar un condado, pueblo, ciudad o código postal y utilizar las pestañas en el lado izquierdo del sitio para navegar en los diferentes temas.  Por favor toma nota que este sitio incluye datos desde el año 2000 hasta el 2019, y puede ser fácil tener acceso inadvertidamente a conjuntos de datos más viejos en vez de acceder a información más actualizada; el Censo solamente publica en su nueva herramienta  <a href="Https://data.census.gov/">https://data.census.gov/</a> datos desde el año 2020 en adelante, la cual, desafortunadamente, es más difícil de usar que el American FactFinder.</li>
            <li>org (<a href="Https://www.justicemap.org/">http</a><a href="Https://www.justicemap.org/">://www.justicemap.org/</a>) sólo tiene datos hasta 2016, pero este sitio, desarrollado por voluntarios, es la mejor manera de ver mapas de disparidades raciales, étnicas, y de ingresos para cualquier parte de los Estados Unidos (busca por nombre y a continuación, haz clic en &quot;Go&quot;). Funciona mejor en Google Chrome.</li>
            <li>Zillow Research / (<a href="Https://www.zillow.com/research/data/">https://www.zillow.com/research/data/</a>) publica conjunto de datos por periodos acerca de cómo los alquileres y los precios han cambiado en un periodo de tiempo, en muchas ciudades y condados en los Estados Unidos. Necesitarás descargar la hoja de cálculo para el tema que te interesa, abrirlo en tu computadora y a continuación busca el nombre de tu ciudad para encontrar la fila adecuada en la hoja de cálculo.</li>
            <li>MassBuilds (<a href="Https://www.massbuilds.com/map">https://www.massbuilds.com/map</a>), producido por MAPC, es un mapa interactivo donde se puede investigar información acerca de los principales proyectos de desarrollo inmobiliario en el estado de Massachusetts.</li>
            <li>Google Street View (<a href="Https://maps.google.com/">Https://maps.google.com</a>) tiene un deslizador de tiempo que te permite ver fotos a nivel de calle de tu vecindario en distintos años, así que puedes investigar cómo ha cambiado tu vecindario a través de los años. Esta puede ser una buena manera de mostrar visualmente el cambio en un vecindario experimentando una rápida gentrificación. Por ejemplo, podrías utilizar el archivo de Google Street View para documentar la cantidad de empresas locales que solían estar en una calle gentrificada antes de que ésta comenzó a cambiar. Esta característica solamente está disponible en algunos lugares. Cuando es así, la página Web tendrá un icono de reloj y una fecha en la esquina superior izquierda, en la que puedes hacer clic para cambiar la fecha que te gustaría ver.</li>
            <li>Princeton University Eviction Lab (<a href="Https://evictionlab.org/">https://evictionlab.org/</a>) es una herramienta con mapas interactivos que te permite mostrar las tasas de desalojo para cualquier lugar en los Estados Unidos. Por favor ten en cuenta que los datos en este sitio fueron comprados de agregadores comerciales nacionales, y la información no es necesariamente exacta para todos los estados. Una cantidad de activistas de viviendas han expresado su frustración con la relación extractiva del Eviction Lab con las organizaciones locales y las formas en que sus dirigentes realizan negocios. El Anti-Eviction Mapping Project ha escrito una crítica incisiva y reflexiva de esta herramienta en concreto si deseas comprender mejor las complejidades en torno a utilizar fuentes de datos en general (<a href="https://shelterforce.org/2018/08/22/eviction-lab-misses-the-mark/">https://shelterforce.org/2018/08/22/eviction-lab-misses-the-mark/</a>).</li>
            <li>500 Cities (<a href="Https://www.cdc.gov/500Cities/">https://www.cdc.gov/500Cities/</a>) es un proyecto del Centro para el Control de Enfermedades (CDC por sus siglas en inglés) que permiten ver resultados en materia de salud proveniente de encuestas de las 500 ciudades más grandes de los Estados Unidos. Sin embargo, si tienes acceso a estadísticas concretas en materia de salud (por ejemplo, de la Evaluación sobre Salud Comunitaria), es probable que sea más precisa que los datos de 500 ciudades.</li>
          </ul>
          <FacilitatorImage :toolkit="toolkit" number="1"></FacilitatorImage>
          <h4 class="subcategory">Paso 4: Revisa los datos de acuerdo a tu experiencia</h4>
          <p>Ahora que has recolectado los datos, reflexiona sobre lo que has encontrado:
          <ul>
          <li><em>¿Hay historias de tu propia experiencia, que amplifican, conectan con, o contradicen los datos que has encontrado?</em></li>
          <li><em>¿Las estadísticas sugieren nuevas vías de organización, u otras comunidades que quisieras contactar?</em></li>
          <li><em>¿Se presentaron los datos de una manera que pareciera clara y comprensible?</em></li>
          </ul>
          </p>
          <p>Sometimes, the data you find won&#39;t match your own knowledge and experience, which can happen for many reasons:</p>
          <p>A veces, los datos que encuentras no coinciden con tu propio conocimiento y experiencia, lo cual puede ocurrir por muchas razones:</p>
          <ul>
            <li>Los datos se presentan como mediana o promedio, lo cual oculta las experiencias de personas que están por debajo o por encima del promedio. Por ejemplo, el ingreso promedio anual de una familia en Everett en 2017 fue de $61,190, pero en realidad, casi un tercio (27%) de las familias en Everett ganan menos de $35,000 al año. A veces se puede profundizar en una fuente de datos determinado e ir más allá del promedio, pero a veces no se dispone de esta información.</li>
            <li>El conjunto de datos al cual tienes acceso describe una zona geográfica que es demasiado grande para capturar la dinámica en tu área particular. Esto es un problema más a menudo en ciudades medianas y pequeñas, donde a veces un vecindario históricamente Latino/a/e o de raza negra o de clase trabajadora es tan pequeño que es agrupado en las estadísticas de áreas cercanas de blancos o ricos.</li>
            <li>En el conjunto de datos que estás revisando no se hicieron las preguntas adecuadas, o está diseñado para ocultar hechos importantes. Por ejemplo, la tasa de desempleo en el Censo de EE.UU. es a veces artificialmente baja debido a que sólo toma en cuenta a las personas que no tienen un trabajo pero que están activamente buscando trabajo, y no a personas que han renunciado a buscar trabajo por completo.</li>
          </ul>
          <p>Si te encuentras en cualquiera de las situaciones anteriores, es posible que necesites considerar la posibilidad de llevar a cabo tu propia encuesta para obtener datos más exactos (algunos enlaces acerca de cómo llevar a cabo una encuesta se pueden encontrar en los enlaces disponibles en la <em>sección de Recursos</em>).</p>
        </template>
      </FacilitationGuide>
      <AdditionalResources :toolkit="toolkit"></AdditionalResources>
    </div>
  </main>
</template>


<script>
  import ToolkitIntro from "../ToolkitIntro";
  import Introduction from "./../../components/Introduction";
  import FacilitationGuide from "./../../components/FacilitationGuide";
  import AdditionalResources from "./../../components/AdditionalResources";
  import FacilitatorImage from '../FacilitatorImage';

  export default {
    name: "workshops",
    components: {
      FacilitatorImage,
      ToolkitIntro,
      Introduction,
      FacilitationGuide,
      AdditionalResources
    },
    props: ["toolkit"],
  };
</script>
