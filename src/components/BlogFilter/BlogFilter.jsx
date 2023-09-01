import React, {useState} from "react";
import styles from './BlogFilter.module.css';



function BlogFilter({postQuery, latest, setSearchParams}) {

    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);
    
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const query = form.search.value;
        const isLatest = form.latest.checked;
        const params = {};
        if (query.length) params.post = query;
        if (isLatest) params.latest = true;
        setSearchParams(params);
    }

    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <label className={styles.checkParams} htmlFor="latestPosts">
          <input
            className={styles.checkbox}
            type="checkbox"
            id="latestPosts"
            name="latest"
            value="checked"
            checked={checked}
            onChange={(event => setChecked(event.target.checked))}
          />
          <span>New only</span>
        </label>
        <input type="submit" value="Search"  className={styles.searchButton}/>
      </form>
    );
}

export default BlogFilter;