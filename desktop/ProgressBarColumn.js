bizagi.rendering.basicUserField.extend("bizagi.rendering.ProgressBarColumn",{}, {

    /*************************************************************/
    /* methods to be overriden by the implementations            */
    /* 2GJ: Widget para representar el porcentaje de avance      */
    /* animado en un render de coleccion.                        */
    /* 2GJ (German J. Gomez Jimenez).                            */
    /*************************************************************/
    
    getEditableControl: function () {
        return this.getGenericControl();
    },
    getReadonlyControl: function () {
        return this.getGenericControl();
    },
    getGenericControl: function () {

        //standard initialization
        var self = this;
        var control = self.getControl();
        var properties = self.properties;
        var extendedData = self.extendedData;
        
        var bindedXpathValue = properties.value || 75;
        
        self.myinput = $("<div>");
        self.myinput.addClass("ProgressBarColumn_MainDivClass");
        
        //2GJ: Crear div principal de control.
        const eleCtrlProgBar = document.createElement("div");
        //2GJ: Clases del div principal.
        eleCtrlProgBar.classList.add("control-progressBar");
        //2GJ: Estilos del div principal.
        eleCtrlProgBar.style.height = properties.heightControl || '20px';
        eleCtrlProgBar.style.width = properties.widthControl || '100%';
        
        //2GJ: Crear div de la barra completa de progreso.
        const eleProgressBar = document.createElement("div"); 
        //2GJ: Clases y atributos del div barra completa de progreso.
        eleProgressBar.classList.add("barra_progreso");
        eleProgressBar.setAttribute('id', 'barra_progreso');
        //2GJ: Estilos de la barra completa de progreso.
        eleProgressBar.style.borderRadius = properties.borderRadius || '20px';
        eleProgressBar.style.backgroundColor = properties.containerBackColor || '#5a2020';
        var contColorSha = properties.containerBoxShadow || '#c74d4d'
        eleProgressBar.style.boxShadow = 'inset 6px 6px 12px ' + contColorSha + ', inset -6px -6px 12px ' + contColorSha;
        
        //2GJ: Crear div del progreso.
        const eleProgress = document.createElement("div");
        //2GJ: Clases y atributos del div barra de progreso.
        eleProgress.classList.add("progreso");
        eleProgress.setAttribute('id', 'progreso');
        //2GJ: Estilos del div barra completa de progreso.
        eleProgress.style.color = properties.progressNumColor || '#f0eeee';
        eleProgress.style.borderRadius = properties.borderRadius || '20px';
        eleProgress.style.backgroundColor = properties.progressBackColor || '#4dd841';
        var progColorSha = properties.progressBoxShadow || '#4dd841'
        eleProgress.style.boxShadow = '0 0 10px ' + progColorSha + ', 0 0 20px ' + progColorSha;
        
        
        //2GJ: Crear div valor del progreso en nunmeros.
        const eleProgessVal = document.createElement("div");
        //2GJ: Clases y atributos div del valor del progreso en nunmeros.
        //eleProgessVal.classList.add("porcentaje");
        eleProgessVal.setAttribute('id', 'porcentajeValue');
        //2GJ: Estilo del div del valor del progreso en nunmeros.
        eleProgessVal.innerText = bindedXpathValue;
        
        
        
        //2GJ: Se enlazan los objetos html.
        self.myinput.append(eleCtrlProgBar);
        eleCtrlProgBar.append(eleProgressBar);
        eleProgressBar.append(eleProgress);
        eleProgress.append(eleProgessVal);
        

        //2GJ: Define la velocidad de la animacion.
        let vel = properties.animationSpeed || 7;
        vel = (((vel - 10) * (-1)) * 20);
    
    
        //2GJ: Maneja la animacion del control.
        let cantidad = 0;
        let totalPorcentaje = eleProgress.innerText;
        
        let tiempo = setInterval(() => {
            cantidad += 1;
            eleProgress.style.width = cantidad + "%";

            if (cantidad == totalPorcentaje) {
                clearInterval(tiempo);
                eleProgressBar.style.backgroundColor = properties.progressBackColor || '#4dd841';
            }

            eleProgress.textContent = cantidad + "%";

        }, vel);
        
        
        return self.myinput;
    }

});