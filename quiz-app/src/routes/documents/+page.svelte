<script>
  import { writable } from 'svelte/store';

  // Document management store
  const documents = writable([
    { 
      id: 1, 
      name: 'Transcript.pdf', 
      type: 'Academic', 
      uploadDate: new Date(),
      size: '2.3 MB'
    },
    { 
      id: 2, 
      name: 'RecommendationLetter.pdf', 
      type: 'Reference', 
      uploadDate: new Date(),
      size: '1.5 MB'
    }
  ]);

  // Document upload handler
  function handleFileUpload(event) {
    const files = event.target.files;
    if (files) {
      const newDocs = Array.from(files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        type: 'User Upload',
        uploadDate: new Date(),
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`
      }));

      documents.update(docs => [...docs, ...newDocs]);
    }
  }

  // Format date utility
  function formatDate(date) {
    return new Intl.DateTimeFormat('en-CA', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  // Document type information
  const documentTypes = [
    { 
      name: 'Transcript', 
      description: 'Official academic record from your high school' 
    },
    { 
      name: 'Recommendation Letter', 
      description: 'Written by teachers or mentors supporting your application' 
    },
    { 
      name: 'Personal Statement', 
      description: 'Your unique story and academic goals' 
    }
  ];
</script>

<div class="space-y-8 max-w-4xl mx-auto p-6">
  <button 
    class="w-fit px-4 py-2 bg-darkgreen text-white rounded-lg shadow-sm 
    hover:bg-green-800 transform hover:scale-105 transition-all
    duration-300text-sm font-medium border border-gray-200"
    onclick="window.location.href = './dashboard';"
  >
    Back
  </button>

  <h1 class="text-3xl font-bold">Document Management</h1>
  
  <!-- Document Upload Section -->
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Upload Documents</h2>
    <div class="space-y-4">
      <label 
        for="fileUpload" 
        class="block border-2 border-dashed border-gray-300 p-8 text-center rounded-lg 
        hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <input 
          type="file" 
          multiple 
          id="fileUpload"
          class="hidden" 
          on:change={handleFileUpload}
        />
        <p class="text-gray-500">
          Drag and drop files here or click to upload
        </p>
      </label>
    </div>
  </div>

  <!-- Recent Documents Section -->
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Uploaded Documents</h2>
    {#if $documents.length === 0}
      <p class="text-gray-500 text-center">No documents uploaded yet</p>
    {/if}
    <div class="space-y-2">
      {#each $documents as doc}
        <div class="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
          <div class="flex items-center space-x-4">
            <div>
              <span class="font-medium">{doc.name}</span>
              <div class="text-sm text-gray-500 flex space-x-2">
                <span>{doc.type}</span>
                <span>•</span>
                <span>{formatDate(doc.uploadDate)}</span>
                <span>•</span>
                <span>{doc.size}</span>
              </div>
            </div>
          </div>
          <div class="flex space-x-2">
            <button class="text-blue-600 hover:underline">View</button>
            <button class="text-blue-600 hover:underline">Download</button>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Document Types Guide -->
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Document Types</h2>
    <div class="grid md:grid-cols-3 gap-4">
      {#each documentTypes as docType}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-semibold mb-2">{docType.name}</h3>
          <p class="text-sm text-gray-600">{docType.description}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
