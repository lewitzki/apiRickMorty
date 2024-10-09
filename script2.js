function calculadora = (a, b, operacao) 
    if (operacao === "soma") 
        return a + b;
          
    else if (operacao === "subtracao")
        return a - b;
    
    else if (operacao === "multiplicacao")
        return a * b;
       
    else if (operacao === "divisao")        
    if (b !== 0) {
        return a / b;}
         
    else     
        return "Divisão por zero não é permitida";     
      
    else 
        return ("Operação inválida")
    

    return ("Divisão por zero não é permitida");         
    console.log(calculadora(10, 5, "subtracao"));     
    console.log(calculadora(10, 5, "multiplicacao"));  
    console.log(calculadora(10, 5, "divisao"));        
    console.log(calculadora(10, 0, "divisao"));        
    console.log(calculadora(10, 5, "invalido"));     
