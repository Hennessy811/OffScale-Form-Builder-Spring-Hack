
	function save_at_local_storage(a_key, a_text) {
	  localStorage.setItem(a_key, a_text);
    }
	
	function get_from_local_storage(a_key) {
	  //alert(localStorage.getItem(a_key));
	  return localStorage.getItem(a_key);
	}
	
	function remove_key_from_local_storage(a_key) {
	  localStorage.removeItem(a_key);
	}
	
	function clear_local_storage() {
	  localStorage.clear();
	}
