$(document).ready(function(){


var sourceh = $("#some-template").html(); 
var template = Handlebars.compile(sourceh); 

var template1 = _.template($('#some-template1').html()); 

var template2 = dust.compile($("#some-template2").html(), "intro");
dust.loadSource(template2);





var data = {
        
        person:{
        
            firstName: "Juan", 
            lastName: "Dinamarca",
            birth: '09/10/1987',
            gender: 'Male',
            adress : 'Chubut 1261',
            mail: 'juan.angel.dinamarca@gmail.com',
            phone: '155368619'
        },
            jobTitle: "Developer",
            location: 'Mar del plata',
            image: 'foto.jpg',
            twitter: "@angeldinamarca",
            pastJobs:
            [{
                job: "Mechanich",
                place: "Neuquen",
                year: "2010-2012"
            },
            {
                job: "architect",
                place: "Zapala",
                year: "2008-2010"
            }],
            Education:
            [{
                place: 'FASTA University'
            },
            {
                place: 'Alpes High School'

            }]
        
     
};

Handlebars.registerHelper('fullName', function(person) {
return person.firstName + " " + person.lastName;
});

$('body').append(template(data));
$('body').append(template1(data));

dust.render("intro", data, function(err, out) {
        $('#salida').html(out);


});
})