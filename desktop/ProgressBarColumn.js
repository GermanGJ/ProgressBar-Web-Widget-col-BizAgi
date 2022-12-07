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
        
        // Crear div principal de control.
        const eleCtrlProgBar = document.createElement("div"); 
        eleCtrlProgBar.classList.add("control-progressBar");
        
        // Crear div de la barra completa de progreso.
        const eleProgressBar = document.createElement("div"); 
        eleProgressBar.classList.add("barra_progreso");
        eleProgressBar.setAttribute('id', 'barra_progreso');
        
        // Crear div del progreso.
        const eleProgress = document.createElement("div");
        eleProgress.classList.add("progreso");
        eleProgress.setAttribute('id', 'progreso');
        
        // Crear div valor del progreso en nunmeros.
        const elePprogessVal = document.createElement("div");
        elePprogessVal.setAttribute('id', 'porcentaje');
        elePprogessVal.innerText = bindedXpathValue;
        
        self.myinput.append(eleCtrlProgBar);
        eleCtrlProgBar.append(eleProgressBar);
        eleProgressBar.append(eleProgress);
        eleProgress.append(elePprogessVal);
        
        /*
        eleProgressBar = document.getElementById('barra_progreso');
        eleProgress = document.getElementById('progreso');
        eleProgress = document.getElementById('porcentaje');
        */
        
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

        }, 70);
        
        
        return self.myinput;
        

        //if no display name is explictly defined, use the following default text
        /*
        var bindedXpathValue = properties.value || "Hello World, I am a Widget";
        */

        //you can do slightly different things in design mode or in runtime
        /*
        if (properties.designMode)
            bindedXpathValue = bindedXpathValue + " previewed in the Forms designer";
        else
            bindedXpathValue = bindedXpathValue + " running at the Work portal";
        */

        //self is our base. The Widget control is defined in this case, containing a <div> HTML element.
        /*
        self.myinput = $("<div>");
        */

        //we can add up any number of inner elements to the control
        /*
        self.myinput.append("<h2>" + bindedXpathValue + " (desktop version) </h2>");
        
        var img_element = $("<img src='http://www.bizagi.com/images/branding/logo_blue.png' alt=''/>");
        self.myinput.append(img_element);
        */

        //define a class for your element so that appearance is customizable from the CSS style sheet.
        /*
        self.myinput.addClass("ProgressBarColumn_MainDivClass");
        */

        //always return the control
        //self.setValue( properties.value || "Hello World, I am a Widget");
        //return self.myinput;
    }

});