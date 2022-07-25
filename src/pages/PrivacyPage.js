
import './PrivacyPage.scss';

const PrivacyPage = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="page-title">Política de privacidad</h1>
      <div className="section">
        <h2 className="title">Introducción</h2>
        <p>
          Estamos muy felices y orgullosos de darles la bienvenida a <b>DEMOS</b>. Ésta
          herramienta es un facilitador democrático para áreas de trabajo y
          variados tipos de grupos sociales y económicos.
        </p>
        <p>
          Con <b>DEMOS</b> esperamos contribuir en la construcción de sociedades
          equilibradas y justas, donde el poder es colectivo y las tomas de
          decisiones se llegan por medio de acuerdos. Por los contextos de
          naturaleza política, empresarial y social en los que se puede aplicar
          dicha herramienta, podemos entender que puedan surgir numerosas
          preocupaciones en cuanto a la seguridad y privacidad del usuario. Con
          las mismas ideas de justicia, comunicación y transparencia sobre la
          cual está fundada <b>DEMOS</b>; esperamos que los siguientes términos y
          condiciones sean lo más claros y concisos posibles.
        </p>
      </div>
      <div className="section">
        <h2 className="title">Open Source</h2>
        <p>
          <b>DEMOS</b> es un proyecto “Open source”, esto significa que los procesos de
          creación, recursos utilizados y cambios efectuados a la herramienta
          están siempre a disposición del usuario. De la misma manera, <b>DEMOS</b> es
          un esfuerzo colectivo y puede ser modificado por los mismos usuarios.
        </p>
      </div>
      <div className="section">
        <h2 className="title">¿Qué información recoge <b>DEMOS</b>?</h2>
        <p>
          Uno de los principales medios de democratización que utiliza <b>DEMOS</b> es
          la votación. Como en toda votación democrática, es necesario que cada
          uno de los votantes sean personas reales y únicas. Mucha de la
          información que recoge la aplicación solamente tiene el fin de
          diferenciar y cumplir los mencionados requerimientos. Esta información
          es la mínima para identificar y diferenciar al usuario:
        </p>
        <ul>
          <li>
            <b>Información de tu cuenta.</b> Para registrarse y empezar a usar
            esta aplicación debes proporcionar tu número telefónico,
            opcionalmente, más adelante, solicitamos tu nombre de perfil junto
            con la foto de perfil.
          </li>
          <li>
            <b>Propuestas.</b> Como representante dentro de un espacio de
            trabajo, guardamos todas las propuestas realizadas así como las
            hayas marcado como borradores dentro de nuestra base de datos.
            <ul>
              <li>
                <b>Comentarios.</b> Como usuario de la aplicación dentro de una
                propuesta puedes hacer comentarios, cada uno de ellos es
                almacenado en nuestra base de datos. Al eliminar un comentario
                que realizaste se mantendrá el registro del comentario realizado
                pero se eliminará el contenido del mismo.
              </li>
            </ul>
          </li>
          <li>
            <b>Contactos.</b> Como administrador puedes invitar a más personas a
            ser parte de un espacio, en que tienes asignado este rol, para esto
            solicitamos poder ver tus contactos almacenados para facilitar el
            envío de estas invitaciones. Ninguno de tus contactos es almacenado
            en nuestra base de datos, a menos de que se haya mandado invitación,
            en ese caso lo guardamos para poder llevar registro a quien va
            dirigida tal invitación.
          </li>
        </ul>
        <h3 className="subtitle">Información recopilada automáticamente</h3>
        <ul>
          <li>
            <b>Invitaciones.</b> Al recibir una invitación avisamos al espacio
            que te invito que recibiste.
          </li>
        </ul>
        <h3 className="subtitle">Información de terceros</h3>
        <ul>
          <li>
            <b>Servicios de terceros.</b> Actualmente para la verificación de
            los números telefónicos utilizamos un servicio de AWS llamado
            Cognito, a el cuál le facilitamos tu número telefónico para enviarte
            posteriormente un código de seguridad, y de esta forma
            autentificarse como el dueño de este número.
          </li>
        </ul>
      </div>

      <div className="section">
        <h2 className="title">
          Cambios en la aplicación y términos de condición
        </h2>
        <p>
          Esta herramienta, por lo pronto, se acerca al fin democrático por
          medio de votaciones interactivas y parametrizadas; además de un gestor
          de espacios de trabajo. Debido a la naturaleza ambiciosa del proyecto,
          además de ser este un proyecto open source y abierto, dicho software
          se verá sujeto a diversos cambios y las funciones del mismo pueden
          cambiar, refinarse o agregarse nuevas funciones. Por cada nuevo cambio
          en el software serán necesarios también cambios en los términos y
          condiciones y tal vez, la forma en que manejamos los datos.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
