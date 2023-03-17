<script>

  let API_LOCATION = '/api/testapi'
  let a = 0
  let b = 0
  let op = 'add'
  let result

  async function callAPI() {
    console.log('CALL API')

    let payload = {
      a: a,
      b: b,
      op: op
    }

    let resp = await fetch(API_LOCATION, {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify(payload)
    });
    if (resp.ok){
      let data = await resp.json();
      result = data.val
      console.log("resultti", result)
    } else {
      result =  `ERROR: ${resp.statusText}`
    }
  }
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<input type="number" bind:value={a} placeholder="A" />
<input type="number" bind:value={b} placeholder="B" />
<select bind:value={op}>
    <option value="add">Add</option>
    <option value="mul">Multiply</option>
</select>
<button on:click={callAPI}> Call func</button>
{#if result}
Result: {result}
{/if}

