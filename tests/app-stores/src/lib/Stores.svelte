<script>
    import { getStores, navigating, page, session } from '$app/stores'

    const { session: getStoresSession, page: getStoresPage, navigating: getStoresNavigating } = getStores()
</script>

<pre data-testid="session">{JSON.stringify($session)}</pre>
<pre data-testid="getStores.session">{JSON.stringify($getStoresSession)}</pre>

<pre data-testid="navigating">{JSON.stringify($navigating)}</pre>
<pre data-testid="getStores.navigating">{JSON.stringify($getStoresNavigating)}</pre>

<pre data-testid="page">{JSON.stringify($page)}</pre>
<pre data-testid="getStores.page">{JSON.stringify($getStoresPage)}</pre>