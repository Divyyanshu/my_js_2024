let Text ;
do{
    Text = parseInt(prompt (`enter text 
        1 . hey 
        2 . bye
        3 . leave`));
 switch (Text) {
    case 1 :
        console.log('HEY');
        alert("hey")
        break;
    case 2 :
        console.log('BYE');
        alert("bye")
        break;
    case 3 :
        console.log('Leave');
        break;
 }

}while(Text !== 3)//breaking statement /  breaking condition