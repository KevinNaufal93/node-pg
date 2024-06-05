const { supabase } = require('../config/supabase');

const fetchUsers = async () => {
  try {
    const { data, error } = await supabase.from('user').select('*');
    if (error) {
      console.error('[SUPABASE ERROR] >>>>>', error);
      throw error;
    }
    return data;
  } catch (error) {
    return error.message;
  }
};

module.exports = { fetchUsers };