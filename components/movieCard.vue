<template>
    <div class="p-4 border border-dashed rounded-xl flex flex-col gap-4 justify-center items-center max-w-xs max-h-max group hover:border-purple-400">
        <img src="@assets/img/kelebek.jpg" alt="" class=" rounded-xl object-center object-cover w-72 h-96 shadow-xl shadow-purple-100 group-hover:scale-105 duration-100 ease-in-out max-w-max">
        <div class="leading-1 font-bold text-xl flex items-center gap-2 pt-2">
            <span class="hover:text-purple-600">Film Adı</span>
            <myicon @click="copy" icon="copy.svg" title="Kopyala" class="cursor-pointer" />
        </div>
        <div>
            <scorestars score="2" />
        </div>
        <div class="border-t p-2 text-center font-thin text-gray-700 selection:bg-purple-600 selection:text-white first-letter:text-xl first-letter:pr-1 first-letter:font-bold first-letter:text-purple-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque rerum odit iusto numquam odio amet aliquid accusamus minus, expedita earum repellendus harum deleniti deserunt dolores quia est eos? Modi?</div>
    </div>
</template>

<script setup>
    const copy = (event) => {
        const text = event.path[2].innerText;
        if(navigator.clipboard.writeText(text)) {
            alert('Kopyalandı: ' + text);
        }
    }
</script>
