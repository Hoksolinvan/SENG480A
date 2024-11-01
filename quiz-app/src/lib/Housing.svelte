<script>
    import Carousel from 'svelte-carousel';

    const rental = [
        { address: "1718 Midgard Avenue, Victoria, BC", price: 900 },
        { address: "1741 Midgard Avenue, Victoria, BC", price: 900 },
        { address: "4326 Vera Cruz Place, Victoria, BC", price: 850 }
    ];
</script>

<div class="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
    <h2 class="text-2xl font-semibold mb-6 text-blue-900">Housing Options</h2>
    <Carousel autoplay="5000">
        {#each rental as item}
            <div class="p-4">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 hover:text-blue-500 cursor-pointer">{item.address}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        {/each}
        <span class="custom-control" slot="left-control"></span>
	<span class="custom-control" slot="right-control">Right</span>
    </Carousel>
</div>


