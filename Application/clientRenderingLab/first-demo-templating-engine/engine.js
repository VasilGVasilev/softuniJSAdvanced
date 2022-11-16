// function that will create the two simple template functions in previous commit (based on the htmls in templates folder)

 export function createTemplate(templateAsString){
    const pattern = /{{(.+?)}}/g;

    return (data) => templateAsString.replace(pattern, (match, name)=>{ //matches: {{title}}, 
        return data[name];
    })
 }

// how replace works => everywhere that there is the pattern
// we apply the (match, group name)
// ex. match -> {{title}}; name -> title
// we use title as key to data object

// createTemplate has a set of input args: templateAsString to parse and data 