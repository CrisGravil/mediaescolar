function somar(){
    
    // Portugues 
    var pp1=window.document.getElementById('Port1')
    var pp2=window.document.getElementById('Port2')
    var res=window.document.querySelector('#res')
    
    var np1= Number(pp1.value)
    var np2= Number(pp2.value)
    var snp= (np1+np2)/2
    res.innerHTML = `${snp} `

    //Matematica
    var pp1=window.document.getElementById('Mat1')
    var pp2=window.document.getElementById('Mat2')
    var res=window.document.querySelector('#res1')
    var np1= Number(pp1.value)
    var np2= Number(pp2.value)
    var snp1= (np1+np2)/2
    res.innerHTML = `${snp1} `

    //Geografia
    var pp1=window.document.getElementById('Geo1')
    var pp2=window.document.getElementById('Geo2')
    var res=window.document.querySelector('#res2')
    var np1= Number(pp1.value)
    var np2= Number(pp2.value)
    var snp2= (np1+np2)/2
    res.innerHTML = `${snp2}`

    //Historia
    var pp1=window.document.getElementById('Hist1')
    var pp2=window.document.getElementById('Hist2')
    var res=window.document.querySelector('#res3')
    var np1= Number(pp1.value)
    var np2= Number(pp2.value)
    var snp3= (np1+np2)/2
    res.innerHTML = `${snp3}`

    //Parecer Final
    var mf = (snp+snp1+snp2+snp3)/4
    var f= mf>=7?'Aprovado':'Reprovado'
    media.innerHTML=`Media Final é ${mf}`
    Resultado.innerHTML=`${f}`

}