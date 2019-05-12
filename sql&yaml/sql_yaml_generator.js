function generateSQL (a_form_json) {
	  var a_form_json = '{"database" : "MySQL", \
	                      "tablename" : "testtable", \
	                      "fields" : [{"name": "id", "type" : "integer", "autoinc" : 1, "nullable" : 0}, \
						              {"name": "name", "type" : "varchar(128)", "autoinc" : 0, "nullable" : 0}, \
									  {"name": "mail", "type": "varchar(128)", "autoinc" : 0, "nullable" : 1}, \
									  {"name" : "password", "type" : "varchar(128)", "autoinc" : 0, "nullable" : 1}], \
						  "primary_key" : "id",\
						  "foreign_keys" : [{"name" : "mail", "references": "mails(mail)"}]}'; 
      var l_form_json = JSON.parse(a_form_json);
	  sql_code = "CREATE TABLE " + l_form_json.tablename + "(\n ";
      for (var key in l_form_json.fields ) {
       if (l_form_json.fields.hasOwnProperty(key)) {
        sql_code = sql_code + l_form_json.fields[key].name + " " + l_form_json.fields[key].type;
		if (l_form_json.fields[key].autoinc == 1) {
		  sql_code = sql_code + " AUTOINCREMENT";
		}
		if (l_form_json.fields[key].nullable == 0) {
		  sql_code = sql_code + " NOT NULL";
		}
		sql_code = sql_code + ",\n ";
       }
      }
	  sql_code = sql_code + "PRIMARY KEY (" + l_form_json.primary_key + ")\n);\n" 
	  for (var key in l_form_json.foreign_keys) {
	    sql_code = sql_code + "ALTER TABLE " + l_form_json.tablename + "\n" + "ADD FOREIGN KEY (" + l_form_json.foreign_keys[key].name + ") REFERENCES " + l_form_json.foreign_keys[key].references + ";\n";
	  }
	  
	  sql_code = sql_code + "SELECT * from " + l_form_json.tablename + ";\n";
	  sql_code = sql_code + "INSERT INTO " + l_form_json.tablename + "(";
	  for (var key in l_form_json.fields ) {
       if (l_form_json.fields.hasOwnProperty(key)) {
        sql_code = sql_code + l_form_json.fields[key].name + ", ";
       }
      }
	  sql_code = sql_code.slice(0, -2) + ")\nVALUES();\n";
	  alert(sql_code);
      return sql_code; 
    }
	
	function generateJSON (a_form_sql) {
	  var a_form_sql = 'CREATE TABLE test ( id integer, name varchar(32), birth date, PRIMARY KEY (id) )'; 
      var l_form_sql = a_form_sql.split(' ');
	  l_json = '{"database" : "MySQL", "tablename" : "' + l_form_sql[2] + '", "fields" : [';
	  for (var i = 4; i < l_form_sql.length; i++) {
	    if (l_form_sql[i] != 'PRIMARY') {
	      l_json = l_json + '{"name" : "' + l_form_sql[i] + '", "type" : "';
		  i++;
		  l_json = l_json + l_form_sql[i].slice(0, -1) + '"},';
        } else {
		  l_json = l_json.slice(0, -1) + '], "primary_key" : "';
		  i++;
		  i++;
		  l_json = l_json + l_form_sql[i].slice(1, -1) + '"}';
		  i = l_form_sql.length;
		}   
	  }
	  alert(l_json);
      return l_json;
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
	
