<template>
  <main class="workshop">
    <section aria-label="overview" class="overview" :style="{'--workshop-color': toolkit.color }">
      <header>
        <h1 :style="{ color: toolkit.color }">{{toolkit.name}}</h1>
        <p class="subtitle">{{toolkit.question}}</p>
      </header>
      <img :src="require(`@/assets/${toolkit.link}.png`)" class="workshopLogo_large" :alt="toolkit.altText" />
      <!--      TODO change to vimeo embed link-->
      <p v-if="toolkit.num" :style="{ color: toolkit.color }" class="bold">{{$t('strings.workshop')}} {{toolkit.num}}</p>
      <div class="tileIcons">
        <a :href="toolkit.print" target="_blank" :aria-label="`${$t('print')} ${toolkit.name}`" @click.stop style="justify-self: end">
          <svg class="icon" width="24px" height="24px" :alt="`${$t('print')} ${toolkit.name}`">
            <use xlink:href="./../../assets/printer.svg#printer"></use>
          </svg>
        </a>
        <a :href="toolkit.edit" target="_blank" :aria-label="`${$t('edit')} ${toolkit.name}`" @click.stop style="justify-self: start">
          <svg class="icon" width="24px" height="24px" :alt="`${$t('edit')} ${toolkit.name}`">
            <use xlink:href="./../../assets/pencil.svg#pencil"></use>
          </svg>
        </a>
      </div>
    </section>
    <div class="workshop_content">
      <Introduction :toolkit="toolkit">
        <span slot="title">Discusión de la Película y Guía de Acción </span>
        <p>El arte y los medios de comunicación son excelentes herramientas para entender y luchar contra el desplazamiento en nuestras comunidades. Las películas pueden ser utilizadas como parte del proceso organizativo de contar una historia y generar interés sobre un problema, expandir y cambiar los diálogos al revelar y examinar diferentes narrativas y experiencias, movilizar comunidades hacia la acción, e influir cambios en las políticas.</p>
        <p><strong>Desplazada</strong> se desarrolla a lo largo de la cuenca baja del Mystic River, el cual por varias generaciones ha conectado a las comunidades de Chelsea, East Boston y Everett con ciclos de generación tras generación de despojo, contaminación industrial, desplazamiento, e injusticia económica en la región.</p>
        <p>En Everett, los residentes no han tenido acceso a la ribera y costa por muchos años debido a una larga historia de industrialización y contaminación. Hasta hace poco, muchos residentes de Everett ni siquiera sabían de la existencia del río. El Casino Encore Boston Harbor abrió en junio de 2019, siendo construido en un sitio que perteneció anteriormente a Monsanto. Durante la etapa de planificación, esta obra fue presentada a les residentes como una solución para finalmente limpiar la tierra contaminada, permitir el acceso al río, y crear trabajos tan necesarios para el área.</p>
        <p>Chelsea está rodeada por tres vertientes: el Island End River, el Chelsea Creek, y el Mill Creek; sin embargo, muchas personas en Chelsea todavía no saben que el área está rodeada por agua, o que es considerada una &quot;comunidad costera&quot;. De la misma manera, el frente costero de Chelsea no ha estado accessible para la mayoría por generaciones— incluyendo Chelsea Creek, la cual ha sido designada como Área Portuaria Designada (DPA por sus siglas en inglés), priorizando su uso industrial para las industrias que dependen del acceso al agua.</p>
        <p>Aunque Chelsea provee beneficios industriales a nivel nacional y regional – incluyendo el almacenamiento de combustible para aviones, combustible para la calefacción de los hogares, y sal para las carreteras, los cuales son usados en cientos de comunidades en toda la región – sus residentes también han sacrificado su salud pública y el acceso a estos valiosos recursos. Después de trabajar por décadas para mejorar la calidad de vida de la comunidad y hacer que la ciudad fuese un lugar más limpio y saludable para vivir, muchos de les residentes más vulnerables de Chelsea han sido desplazados.</p>
        <p><strong>Desplazada</strong> describe nuestra historia y las causas actuales del desplazamiento que está ocurriendo en estas comunidades (y más allá) a lo largo de esta misma ribera. Esta película fue creada como una herramienta organizativa para incrementar el nivel de empatía y conciencia sobre el desplazamiento, lo que luego conduce a la acción comunitaria. Esta película y guía de acción se pueden usar para:</p>
        <ul>
          <li>Crear oportunidades para sostener un diálogo crítico acerca del desplazamiento y su impacto en la comunidad.</li>
          <li>Examinar las injusticias ambientales y de vivienda.</li>
          <li>Pensar críticamente sobre estrategias para luchar por la justicia ambiental y para terminar con el desplazamiento.</li>
        </ul>
        <p>Esta guía de facilitación describe los pasos para proyectar la película y ofrece preguntas orientadoras para involucrar a les participantes en una conversación acerca de las fuerzas interelacionadas entre el desplazamiento y la injusticia ambiental. Esta guía puede ser adaptada según sea necesario para ajustarse a las necesidades de tu comunidad y el público.</p>

      </Introduction>
      <FacilitationGuide :toolkit="toolkit">
        <div slot="Workshop_Purpose">
          <p>Abrir un espacio para el diálogo y la reflexión sobre las experiencias vividas por la gentrificación, la injusticia ambiental y el desplazamiento.</p>
          <p>Hacer preguntas abiertas sobre el origen de la injusticia ambiental, la distribución de los recursos, el uso de la tierra y el ser dueñe de una propiedad.</p>
          <p>Inspirar la investigación sobre la relación de las personas con la naturaleza, las políticas de vivienda, la economía, la historia, las injusticias y las tendencias normalizadas en este preciso momento.</p>
        </div>
        <div slot="Workshop_Outcomes">
          <p>Estos deben ser establecidos por les organizadores y facilitadores basado en &quot;lo que quieren saber o tener al final&quot; de la proyección de la película.</p>
        </div>
        <template slot="Whom_to_Invite">
          <p>A quién invites (o excluyas) dependerá grandemente en el objetivo (<em>¿Porqué invitarles?</em>) y resultados (<em>¿Qué quieres saber o tener al final?</em>) de organizar la proyección de la película y conversación con tu comunidad.</p>
          <p>Una vez que esto ha sido identificado, entonces debes preguntar:</p>
          <ul>
            <li><em>¿Quién podría ayudar a cumplir con este objetivo?</em></li>
            <li><em>¿Quién es más importante para esta actividad?</em></li>
            <li><em>¿Quién podría representar una amenaza para la realización de este objetivo?</em></li>
          </ul>
          <p>Por ejemplo: Si tu meta es incorporar nueves miembros a tu coalición o red o construir relaciones y colaborar con aliades en problemas de largo plazo relacionados al desplazamiento, podrías invitar a representantes de organizaciones comunitarias que comparten similares valores, metas y que están trabajando en las mismas comunidades. Si quieres reclutar y expandir tu membresía, invita a residentes que están siendo afectados por el desplazamiento y la gentrificación. Al final de la proyección, podrás invitar a les participantes a que se inscriban en tu lista de distribución, asistan a una reunión o que participen en una acción comunitaria, o que sean miembros de tu coalición, red u organización.</p>
        </template>
        <template slot="Materials_and_Preparation">
          <ul>
            <li>Identifica 1-2 facilitadores y asignales funciones para las discusiones, incluyendo a alguien que tome notas y alguien que lleve control del tiempo.  Si 2 facilitadores están presentes, cada une puede apoyar a le otro y al público en caso que la discusión se vuelva emocional.</li>
            <li>Imprime la breve introducción a la película para compartirla al inicio de la proyección con les participantes.</li>
            <li>Identifica preguntas claves que planeas preguntar al público, de acuerdo a las personas que están presentes, al tamaño y diversidad del grupo, y a los resultados deseados para esta conversación.</li>
            <li>Considera imprimir y distribuir las preguntas al público para que les sirva como referencia durante la discusión.</li>
            <li>Asegúrate que tienes (y prueba instalarlo) todo el equipo audiovisual (ejemplo: proyector, computadora portátil, pantalla)</li>
            <li>La película está disponible en <a href="https://greaterbostontoolkit.org/es/pelicula">https://greaterbostontoolkit.org/es/pelicula</a>. Cada organización socia también tiene disponible una copia para ser usada.</li>
            <li>Si conduces la actividad opcional, necesitarás materiales (papeles, marcadores y lapiceros de colores, notas adhesivas) para que les participantes puedan crear sus propies cronogramas futuros.</li>
          </ul>
        </template>

        <!-- Tips -->
        <template slot="Tips">
          <ul>
            <li>¡La película puede ser proyectada en organizaciones, Encuentros comunitarios, reuniones, foros, conferencias y aún en tu propio hogar!</li>
            <li>La película tiene una duración aproximada de 14 minutos. La discusión y preguntas pueden ser modificadas de acuerdo a las metas de la proyección, el público y el tiempo disponible.</li>
            <li>Mira la película al menos una vez – preferiblemente con otras personas – antes de facilitar un diálogo comunitario, lo cual te ayudará a prepararte para tus propias reacciones y reflexiones a lo que has visto y como se comparan con las reacciones y reflexiones de otras personas.</li>
            <li>Revisa los antecedentes y contexto de la película, el reparto (en orden de aparición) descrito en los créditos de la película, y los permisos para prepararte por cualquier pregunta sobre el material filmando presentado en la película.</li>
            <li>Motiva el uso del &quot;Yo&quot; cuando solicites al público reflexionar y responder a las preguntas</li>
            <li>Crea un espacio seguro para el público y ten una discusión abierta sobre el impacto de la película y sus reflexiones. Esto es especialmente cierto si conoces que los miembros del público tendrán diferentes perspectivas y puntos de vista sobre los temas discutidos. (Revisa los Acuerdos Comunitarios modificados y adoptados de <a href="http://aorta.coop/">Aorta</a>)</li>
            <li>Debes estar preparado para diferentes perspectivas y respuestas emocionales. Usa las metas de la proyección y los Acuerdos Comunitarios (u otras herramientas utilizadas para crear un espacio seguro) para dar espacio a las diferencias y reposicionar las conversaciones según sea necesario</li>
          </ul>
          <h3>Acuerdos Comunitarios</h3>
          <table class="community-agreements">
            <tbody>
            <tr>
              <td>ONE DIVA, ONE MIC<br><br>UNA DIVA, UN MICRÓFONO</td><td>Por favor, solamente 1 persona puede hablar a la vez. (Para las personas que necesitan más tiempo para procesar sus palabras, o que se sienten menos cómodas solicitando su participación en una conversación, podría ser útil solicitarles que aprovechen el espacio entre las(os) exponentes para prepararse)</td>
            </tr>
            <tr>
              <td>NO ONE KNOWS EVERYTHING; TOGETHER WE KNOW A LOT<br><br>NADIE SABE TODO; JUNTOS SABEMOS MUCHO</td><td>Esto quiere decir que todes podemos practicar ser humildes, porque tenemos algo que aprender de cada persona en la habitación. También significa que todes tenemos la responsabilidad de compartir lo que sabemos, incluyendo nuestras preguntas, de manera que otras personas puedan aprender de nosotros también.</td>
            </tr>
            <tr>
              <td>MOVE UP, MOVE UP<br><br>MOVÁMONOS ROLES</td><td>Si eres alguien que tiende a hablar menos, por favor anímate a moverte a una función donde hables más.  Si tiendes a hablar mucho, por favor anímate a moverte a una función donde puedas escuchar más. Esto es una variación del comúnmente conocido &quot;paso adelante, paso atrás&quot;. El &quot;adelante/adelante&quot; confirma que en ambas experiencias está dándose un crecimiento. (No retrocedes al aprender a ser un mejor oyente).  Decir &quot;moverse&quot; en vez de &quot;dar un paso&quot; reconoce que no todas las personas pueden dar un paso.</td>
            </tr>
            <tr>
              <td>WE CAN&#39;T BE ARTICULATE ALL THE TIME<br><br>NO LOGRAMOS ARTICULAR TODO EL TIEMPO</td><td>Con frecuencia, las personas se sienten indecisas de participar en un taller o reunión por temor a &quot;equivocarse&quot; o hablar entrecortado. Queremos que todes se sientan cómodes participando, incluso si no pueden ser tan elocuentes como quisieran.</td>
            </tr>
            <tr>
              <td>BE AWARE OF TIME<br><br>SER CONSCIENTES DEL TIEMPO</td><td>Esto es útil para la persona facilitando, y ayuda a respetar el tiempo y compromiso de cada persona. Por favor regresen a tiempo de los descansos, y eviten hablar por medio de largos monólogos.</td>
            </tr>
            <tr>
              <td>BE CURIOUS<br><br>SER CURIOSOS</td><td>Tomamos mejores decisiones cuando abordamos nuestros desafíos y problemas por medio de preguntas (&quot;Qué tal si nosotros …?&quot;) y curiosidad. Permite espacios para que se realicen juegos y se desarrolle la curiosidad y el pensamiento creativo.</td>
            </tr>
            <tr>
              <td>ANYTHING TO ADD?<br><br>¿ALGO MÁS?</td><td></td>
            </tr>
            </tbody>
          </table>
          <p><strong>NOTA:</strong> Algunes participantes con frecuencia mencionan algunos acuerdos comunitarios que tendemos a no usar o incorporar, estos incluyen: &quot;asumir las mejores intenciones&quot; y &quot;confiar de hecho&quot;. No usamos estos acuerdos debido a que si alguien es incapaz de hacer esto (decir que sienten desconfianza o se sienten inseguros de alguien), el tener un acuerdo comunitario que dice que deben hacer tal cosa realmente no va a cambiar nada. En otras palabras, estos acuerdos no son siempre posibles, especialmente cuando tomamos en consideración que algunas personas han sido heridas por el sexismo, el racismo, la homofobia, transfobia, y el clasismo. En vez, sugerimos, &quot;no podemos ser elocuentes todo el tiempo&quot;, &quot;ser generosos con el resto&quot;, y &quot;este es un espacio para aprender&quot;, los cuales reflejan el espíritu de construir las herramientas necesarias para cuidarnos y protegernos nosotres mismes.</p>
        </template>
        <template slot="Detailed_Plan">
          <FacilitatorImage :toolkit="toolkit" number="1"/>
          <Instructions>Los antecedentes y contexto de la película son provistos para ayudar a la persona que facilita a orientar la discusión sobre la película.  Utiliza todas o partes de esta información para crear una invitación para la proyección de la película, presentarla en un evento o apoyar una discusión abierta.
            <p><strong>Antecedentes y Contexto:</strong> Con frecuencia, no se menciona explícitamente la relación entre la degradación ambiental, la rehabilitación&quot;verde&quot;selectiva, el desarrollo extractivo, la gentrificación y los ciclos de desplazamiento. Los movimientos que no tienen en cuenta estas fuerzas interconectadas, dinámicas e históricas pueden verse tentados a legitimar las políticas injustas del uso de la tierra que canjean entornos saludables y habitables por viviendas asequibles a corto plazo. En nuestra economía de escasez, aprendemos a luchar por los desechos. Somos testigos de esto cuando hiperlocalizamos nuestras preocupaciones, nos preocupamos más por mejorar nuestra propia comunidad que por considerar los efectos secundarios de nuestras decisiones en las comunidades vecinas - este tipo de pensamiento está históricamente enraizado en una cultura dominante de extracción de recursos bajo el pensamiento de colonos-colonialismo y de robo de tierras en los EE. UU. que determina las oportunidades de vida individuales y las decisiones políticas.</p>
            <p>Por otro lado, muchos esfuerzos colectivos exitosos para la restauración comunitaria de paisajes envenenados y abandonados han sido cooptados por el capitalismo. Hoy en día, la remediación ambiental está en auge como una empresa comercial, lo que facilita el crecimiento de las industrias &quot;verdes&quot; con fines de lucro y las posteriores oleadas de reasentamiento blanco. Está claro que la limpieza ecológica, posindustrial, los espacios verdes y la idea misma de disfrutar de estos espacios ahora están disponibles solo para quienes, literalmente, pueden permitirse ese privilegio. Si bien los detalles de la estética y la terminología pueden ser nuevos, este doble estándar vinculado a clase y raza no lo es.</p>
            <p>¿Qué tipo de mundo merecemos? ¿Cómo nuestra relación con la tierra y sus elementos define nuestra experiencia del yo, la comunidad, la identidad y la historia? ¿Qué significa hogar? Nuestras vidas están moldeadas por la migración y la transitoriedad, la herencia, la conexión y la adaptación. Nuestras diferentes historias y posibles futuros compiten por resolución en esta tierra robada.</p>
            <p><strong>Desplazada</strong> hace estas preguntas.</p>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="2"/>
          <Instructions>Las preguntas de discusión detalladas a continuación están organizadas por los temas claves presentados en la película. Comienza por hacer las preguntas generales de apertura para comenzar la conversación antes de sumergirse en cualquier tema específico. Elije meticulosamente las preguntas temáticas específicas dependiendo de la conversación, el público y las metas de la exhibición de la película y el debate. La actividad posterior a las preguntas de discusión es opcional.
            <p>Solicita a les participantes que compartan sus reflexiones y comentarios.</p>
            <p><strong>Sesión General Inicial</strong></p>
            <ol>
              <li>¿Cómo se sintió mirar esta película? Seleccione una secuencia que le haya llamado la atención y explique su experiencia al verla.</li>
              <li>¿Cuáles son algunas de las fuerzas a las que se está enfrentando esta comunidad?</li>
              <li>En cualquier parte, las personas pueden experimentar y ver las mismas cosas desde diferentes puntos de vista. ¿Quiénes son les diferentes actores-partes interesadas en esta película? ¿Cuáles son sus puntos de vista o intereses demostrados a lo largo de la película?</li>
            </ol>
            <p><strong>Justicia Ambiental</strong></p>
            <ol start="4">
              <li>¿Qué imágenes del entorno se representan durante este segmento de apertura? ¿Qué te transmiten? ¿Cómo podrían relacionarse con los nombres de las empresas que se mencionan?</li>
              <li>¿Quién crees que escribió la carta y porqué? ¿Quién crees que recibió la carta? ¿Qué es lo que la carta te dice (o no te dice) acerca de la situación explorada en esta película? ¿Cuál es la situación que está siendo explorada?</li>
              <li>¿Cuál crees que sea el propósito de la última escena? ¿Cómo se compara con otros segmentos de la película? ¿Qué te hace pensar o sentir? ¿Cuál es la relación entre las personas, la tierra, el río, y el desarrollo construido por personas en esta escena?</li>
            </ol>
            <p><strong>Contexto Histórico del Desarrollo y el Desplazamiento</strong></p>
            <ol start="7">
              <li>¿Cuál es la importancia de los fragmentos de video de 1998? ¿Cómo se compara esta nueva experiencia con los momentos pasados de la historia? ¿Cómo se abordaron estas cosas en el pasado y como se abordan actualmente?</li>
            </ol>
            <p><strong>La Intersección entre Clase y Raza, Justicia Ambiental y Desplazamiento</strong></p>
            <ol start="8">
              <li>La persona que se refería a los &quot;ambientalistas blancos abraza- árboles&quot; le preguntó a otra: &quot;¿Qué estás haciendo con tus árboles, tu arroyo?&quot; El narrador responde: &quot;Solo estábamos tratando de aferrarnos al espacio abierto que nos estaban quitando&quot; ¿Cuál es el conflicto que describe la persona que habla? ¿Puedes relacionarte con ese conflicto en la forma en que se enmarca?</li>
              <li>&quot;Las mismas personas que han trabajado tan duro para limpiar nuestras comunidades no podrán disfrutar de ellas porque literalmente están siendo desplazadas en este momento&quot;, concluye el narrador. ¿En qué te hace pensar esta afirmación y cómo te relacionas con esto?</li>
              <li>¿A quién se representa en esta secuencia y cómo crees que se relacionan con la historia más amplia de injusticia y desplazamiento ambiental?</li>
              <li>¿Te recuerdan estas personas algo o alguien en tu vida? ¿Se parecen a ti o a las personas que viven en tu comunidad? ¿Las cosas que mencionan te hacen sentir de alguna manera en particular? ¿Estás de acuerdo o en desacuerdo con lo que dicen? ¿Quién crees que es su público?</li>
              <li>¿Cómo se relaciona el ejemplo de &quot;caminar por la ciudad y oler chocolate porque hay una fábrica de chocolate&quot; con las condiciones industriales que se señalan en la película? ¿Crees que esta analogía es útil o apropiada? ¿Por qué o por qué no?</li>
              <li>¿Qué crees que las imágenes y los sonidos a continuación sugieren sobre el punto de vista de la película?</li>
              <li>&quot;Creemos que es mucho más emocionante jugar baloncesto cuando un petrolero pasa a unos metros&quot;, dice une de les personajes.</li>
              <li>&quot;Ese es el tipo de momentos que estamos tratando de cultivar en el trabajo&quot;, seguido de una imagen congelada de niñes en un parque infantil cerca de un sitio industrial. Ruidosas máquinas gimen mientras les niñes gritan y juegan en baloncesto.</li>
            </ol>
            <p><strong>Justicia Económica y Desplazamiento</strong></p>
            <ol start="16">
              <li>&quot;Wynn Resorts ha prometido 4,000 empleos temporales en la construcción durante el período de construcción, y miles de empleos en la industria hotelera&quot;, dice el personaje. ¿Qué opinas de este argumento? Si estás familiarizado con la situación de Wynn Resorts (ahora Encore), ¿qué te hace pensar o sentir este segmento?</li>
              <li>¿Piensas, como menciona ahí el alcalde, que Encore ha &quot;devuelto el Mystic a las personas de Everett?&quot; ¿Porqué o porqué no?</li>
              <li>¿Cómo se relacionan el hotel y la limpieza con el arroyo/río, la región en general y los temas de injusticia ambiental y desplazamiento? ¿Por qué crees que este segmento se incluyó en la película?</li>
              <li>Sobre las imágenes de un sitio industrial, una mujer dice: &quot;Si no tienes dinero, estás solo. Vives como la sociedad considera que tienes que vivir. Pero si tienes dinero, puedes mudarte. Puedes ir a un lugar diferente. Puedes elegir cómo y dónde vives. Pero para algunos de nosotres, esa no es una opción&quot;. ¿Qué te parece su aseveracíón? ¿Cómo crees que su posición es similar o diferente a la de les arquitectes que hablaron sobre lo emocionante que es jugar baloncesto apenas a unos pies de donde pasa un buque petrolero? ¿Cómo crees que su aseveración podría relacionarse con la historia y el trabajo actual de les activistes de justicia ambiental mencionados anteriormente?</li>
              <li>La mujer parada frente a su casa habla sobre el significado para sí misma de ser dueña de su propia vivienda y la amenaza de la gentrificación y la proliferación de condominios propiedad de inversionistas. ¿Te recuerda algo o alguien en tu vida? ¿Se parece a ti o a las personas que viven en tu comunidad? ¿Las cosas que mencionan te hacen sentir de alguna manera en particular?</li>
            </ol>
          </Instructions>
          <FacilitatorImage :toolkit="toolkit" number="3"/>
          <h4>Actividad: Cronograma Futuro (Opcional)</h4>
          <Instructions>Esta actividad utiliza la película para ayudar a les participantes a imaginar cómo se formarán los próximos 20-30 años en la comunidad. Colectivamente, les participantes podrían descubrir cómo imaginar y construir posibilidades transformadoras para un mundo justo y ecológicamente saludable.
            <ul>
              <li>Solicita a les participantes que diseñen su propio cronograma futuro para los próximos 20-30 años, pensando en la película en contexto con cualquier información o conocimiento traído de los vecindarios donde se organizan.</li>
              <li><p>Solicita a les participantes que tomen aproximadamente 10 minutos considerando lo siguiente:</p>
                <ul>
                  <li><em>¿Cómo podríamos lograr el futuro más deseado?</em></li>
                  <li><em>¿Qué pequeños pasos podemos tomar ahora, colectivamente e individualmente, para construir ese futuro?</em></li>
                  <li><em>Siéntete libre de inspirarte en el pasado, pero no dejes que la historia limite tu creatividad e imaginación.</em></li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>Después de 10 minutos, solicita a les participantes que compartan sus cronogramas con el resto del grupo.</li>
            </ul>
            <ul>
              <li>Una vez que todos los grupos hayan compartido, reflexiona con les participantes sobre los futuros que han imaginado al preguntarles:
                <ol>
                  <li><em>¿Qué te inspiró o emocionó?</em></li>
                  <li><em>¿Qué pasos podríamos tomar o explorar más?</em></li>
                </ol>
              </li>
            </ul>
          </Instructions>
        </template>
      </FacilitationGuide>
      <TakingAction :toolkit="toolkit">
        <p>Las comunidades del área de Boston se están organizando para proteger la salud y la vida de todes les residentes, incluyendo las poblaciones más vulnerables: inmigrantes /migrantes, comunidades de color, comunidades marginadas, jóvenes y ancianes. La lucha por la justicia ambiental y una mejor salud pública está inextricablemente unida a la lucha contra el desplazamiento y por el derecho a la libre determinación. Las comunidades en la primera línea – aquellas que son las más afectadas por la crisis climática y los peligros ambientales cotidianos - están a la vanguardia de esta lucha en nuestra región y en todo el país. Levántate en solidaridad con estas comunidades que luchan contra el desplazamiento y apoya los esfuerzos de base por la justicia ambiental y la mejora de la salud pública.</p>
        <p>Para encontrar más recursos o ponerte en contacto y apoyar a las comunidades en el terreno en Chelsea y Everett, visita el sitio web del Manual Anti-Desplazamiento del Área Metropolitana de Boston (<a href="https://greaterbostontoolkit.org">https://greaterbostontoolkit.org</a>) para obtener más información.</p>
      </TakingAction>
      <AdditionalResources :toolkit="toolkit"></AdditionalResources>
      <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Permisos de filmación</h2>
      <p>Los siguientes permisos son provistos como un recurso informativo y pueden ser utilizados a discreción de la persona que facilita.</p>
      <table>
        <thead>
        <tr>
          <th><strong>Espacio Aéreo</strong></th>
          <th><strong>Propiedad</strong></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <ul>
              <li>El camarógrafo del dron es un piloto de aviones licenciado por FAA (la certificación se llama Part 107), lo que quiere decir que está legalmente autorizado y con derecho para operar un avión no tripulado. Es la responsabilidad del operador el volar con seguridad y en una forma autorizada.</li>
              <li>La certificación de dron de la FAA minimiza la responsabilidad y protege a los civiles durante los vuelos, y reduce los riesgos relacionados con volar.</li>
              <li>El área de Boston es un espacio aéreo de &quot;Clase B&quot;, lo que implica que el operador de drones necesita autorizar cualquier misión de drones a través de una aplicación telefónica que requiere que ingrese sus credenciales.</li>
              <li>El dron tiene instalado un software de geo-delimitación, lo que significa que, literalmente, no despegará del suelo cuando esté demasiado cerca de un aeropuerto o en una zona de &quot;exclusión aérea&quot;.</li>
              <li>El espacio aéreo es regulado por la FAA aunque nadie es dueño del mismo.</li>
              <li>No encontramos ninguna zona de &quot;exclusión aérea&quot; durante la filmación, y tomamos precauciones para no volar encima de las carreteras principales.</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Producida como una película al aire libre.</li>
              <li>Durante el transcurso de la filmación, no invadimos ninguna propiedad con el dron, ni siquiera para despegar o aterrizar. <em>Nota:</em> Si la propiedad se puede ver desde una acera o área pública, generalmente se considera que se puede filmar.</li>
              <li>Clips de la película The Eddy son de un <a href="https://www.youtube.com/watch?v=JDofnB_O7YU">video promocional</a> que ellos publicaron en YouTube.</li>
              <li>De la misma manera, <a href="https://www.youtube.com/watch?v=OIg9nTmICpc">el audio</a> en las noticias sobre la historia de Encore sería considerado como de uso apropiado.</li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
      <h2 :style="{ borderBottom: '2px solid ' + toolkit.color }">Reconocimientos en la Película y Créditos</h2>
      <p>Esta película es una colaboración financiada por la Fundación Surdna en sociedad con el Laboratorio de Innovadores Comunitarios (Co-Lab) en el Departamento de Planificación de MIT, Research Action Design, GreenRoots, y la Coalición de Salud Comunitaria de Everett.</p>
      <p>Producida y Dirigida por: Puck Lo</p>
      <p>Reparto (en orden de aparición): Grace Muwina, Damali Vidot, Mayra Romero, Bryant Romero quien es el hijo de Mayra, los niños(as) Jeffry Ramos, Tiffany Enriquez y Ericksson Enriquez</p>
      <p>Directore de Fotografía: Puck Lo</p>
      <p>Camarógrafe del Dron: Dane Christensen</p>
      <p>Editore: Puck Lo</p>
      <p>Música: Stefan Christoff</p>
      <p>Agradecimiento especial a: Maria Belen Power, Kathleen O&#39;Brien, Andres Del Castillo, Indira Garmendia Alfaro, Sarah Levy, Sarah Gay, Justin Steil, Lad Dell, Amber Christofferson, Deanna Moran, Matt Spurlock, Hana Georg, Kim Garcia, Francine Harris, R.J. Lozada, Paloma Martinez, Maris Curran, Gael Gundin Guevara, Elivia Shaw, Caroline Rivas, Tim Stallmann, Taylor Cain, Andrew Binet, Taina McField</p>
    </div>
  </main>
</template>

<script>
  import Introduction from "./../../components/Introduction";
  import FacilitationGuide from "./../../components/FacilitationGuide";
  import Instructions from "./../../components/Instructions";
  import AdditionalResources from "./../../components/AdditionalResources";
  import FacilitatorImage from '../FacilitatorImage';
  import TakingAction from "./../../components/TakingAction";

  export default {
    name: "Film",
    components: {
      Introduction,
      FacilitationGuide,
      FacilitatorImage,
      Instructions,
      TakingAction,
      AdditionalResources
    },
    data() {
      return {
        toolkit: this.$t('filmToolkit'),
      };
    },
  };
</script>
