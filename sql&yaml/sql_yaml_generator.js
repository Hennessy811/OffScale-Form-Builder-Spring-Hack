function generateSQL (a_form_json) {
      var l_sql_code;
      var l_form_json = JSON.parse(a_form_json);
	  sql_code = "CREATE TABLE " + l_form_json.dbname + "(\n ";
      for (var key in l_form_json.input ) {
       if (l_form_json.input.hasOwnProperty(key)) {
        sql_code = sql_code + l_form_json.input[key].name + " varchar(256),\n ";
       }
      }
	  sql_code = sql_code + "id integer PRIMARY KEY\n);"
	  //alert(sql_code);
      return sql_code; 
    }
	

	
	function generateYAML (a_form_json) {
      var l_yaml_code; 
	  var l_form_json = JSON.parse(l_form_json_test);
	  l_yaml_code = 'openapi: "3.0.0"\n \
        info:\n \
        version: 1.0.0\n \
        title: ' + l_form_json.tablename + '\n \
        license:\n \
        name: MIT\n \
        servers:\n \
        - url: http://localhost\n \
        paths:\n \ '
		+ l_form_json.tablename + ':\n \
    get:\n \
      summary: List all ' + l_form_json.tablename + '\n \
      operationId: list' + l_form_json.tablename + '\n \
      tags:\n \
        - ' + l_form_json.tablename + ' \
      parameters:\\n \
        - name: limit\n \
          in: query\n \
          description: How many items to return at one time (max 100)\n \
          required: false\n \
          schema:\n \
            type: integer\n \
            format: int32\n \
      responses:\n \
        "200":\n \
          description: A paged array of ' + l_form_json.tablename + '\n \
          headers:\n \
            x-next:\n \
              description: A link to the next page of responses\n \
              schema:\n \
                type: string\n \
          content:\n \
            application/json:\n     \
              schema:\n \
                $ref: "#/components/schemas/' + l_form_json.tablename + '"\n \
        default:\n \
          description: unexpected error\n \
          content:\n \
            application/json:\n \
              schema:\n \
                $ref: "#/components/schemas/Error"\n 	   \
	  ';
	  //alert(l_yaml_code);
      return l_yaml_code; 
    }
	
