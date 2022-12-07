bizagi.rendering.basicUserField.extend("bizagi.rendering.ProgressBarColumn",{}, {

    /*************************************************************/
    /* methods to be overriden by the implementations            */
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
        
        // Crear div principal de control.
        const eleCtrlProgBar = document.createElement("div"); 
        eleCtrlProgBar.classList.add("control-progressBar");
        eleCtrlProgBar.style.height = properties.heightControl || '20px';
        eleCtrlProgBar.style.width = properties.widthControl || '100%';
        
        // Crear div de la barra completa de progreso.
        const eleProgressBar = document.createElement("div"); 
        eleProgressBar.classList.add("barra_progreso");
        eleProgressBar.setAttribute('id', 'barra_progreso');
        eleProgressBar.style.borderRadius = properties.borderRadius || '20px';
        eleProgressBar.style.backgroundColor = properties.containerBackColor || '#5a2020';
        eleProgressBar.style.boxShadow = properties.containerBoxShadow || '#c74d4d';
        
        
     
        // Crear div del progreso.
        const eleProgress = document.createElement("div");
        eleProgress.classList.add("progreso");
        eleProgress.setAttribute('id', 'progreso');
        eleProgress.style.borderRadius = properties.borderRadius || '20px';
        
        
        // Crear div valor del progreso en nunmeros.
        const elePprogessVal = document.createElement("div");
        elePprogessVal.setAttribute('id', 'porcentaje');
        elePprogessVal.innerText = bindedXpathValue;
        
        self.myinput.append(eleCtrlProgBar);
        eleCtrlProgBar.append(eleProgressBar);
        eleProgressBar.append(eleProgress);
        eleProgress.append(elePprogessVal);
        

    
        let vel = properties.animationSpeed || 7;
        vel = (((vel - 10) * (-1)) * 20);
    
        let cantidad = 0;
        let totalPorcentaje = eleProgress.innerText;
        
        let tiempo = setInterval(() => {
            cantidad += 1;
            eleProgress.style.width = cantidad + "%";

            if (cantidad == totalPorcentaje) {
                clearInterval(tiempo);
                eleProgressBar.style.backgroundColor = "#ac3f1700";
            }

            eleProgress.textContent = cantidad + "%";

        }, vel);
        
        
        return self.myinput;
    }

});