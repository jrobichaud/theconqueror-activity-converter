<script>
    import 'bulma/css/bulma.css'
    import AutoComplete from "simple-svelte-autocomplete"
    import Select from 'svelte-select';
    import CopyClipBoard from './CopyClipboard.svelte';
    import { Button } from 'svelma'

    const units = [
        {value: "metric", label: "Metric", multiplier: 1},
        {value: "imperial", label: "Imperial", multiplier: 1.60934},
    ]
    export let duration;
    const conversions = [
        {id: 1, name: "Aerobics, low intensity", conversion: 1.02},
        {id: 2, name: "Aerobics, high intensity", conversion: 1.46},
        {id: 3, name: "Aerobics, step", conversion: 1.23},
        {id: 4, name: "Badminton", conversion: 1.05},
        {id: 5, name: "Ballet dancing", conversion: 0.97},
        {id: 6, name: "Baseball", conversion: 1.05},
        {id: 7, name: "Basketball", conversion: 1.05},
        {id: 8, name: "Bicycling, easy (8.7mi/h or 14km/h)", conversion: 2.25},
        {id: 9, name: "Bicycling, moderate (15mi/h - 24km/h)", conversion: 4.02},
        {id: 10, name: "Bicycling, vigorous (20mi/h - 32km/h)", conversion: 5.31},
        {id: 11, name: "Bowling", conversion: 0.57},
        {id: 12, name: "Boxing", conversion: 1.79},
        {id: 13, name: "Calisthenics", conversion: 0.85},
        {id: 14, name: "Canoeing", conversion: 0.73},
        {id: 15, name: "Cheerleading", conversion: 0.8},
        {id: 16, name: "Circuit training (squats, lunges, pushups, burpees, situps etc)", conversion: 1.6},
        {id: 17, name: "Climbing, indoor/outdoor", conversion: 2.17},
        {id: 18, name: "Croquet", conversion: 0.61},
        {id: 19, name: "CrossFit", conversion: 2.01},
        {id: 20, name: "Dancing", conversion: 0.88},
        {id: 21, name: "Elliptical trainer", conversion: 1.63},
        {id: 22, name: "Fencing", conversion: 1.46},
        {id: 23, name: "Fishing", conversion: 0.73},
        {id: 24, name: "Football/soccer", conversion: 1.6},
        {id: 25, name: "Gardening / yard work", conversion: 0.64},
        {id: 26, name: "Golf (carrying clubs)", conversion: 0.88},
        {id: 27, name: "Grocery shopping", conversion: 0.54},
        {id: 28, name: "Gymnastics", conversion: 0.97},
        {id: 29, name: "Handball", conversion: 2.8},
        {id: 30, name: "HIIT", conversion: 2.01},
        {id: 31, name: "Hiking / orienteering", conversion: 1.87},
        {id: 32, name: "Hockey, field and ice", conversion: 1.93},
        {id: 33, name: "Horseback riding", conversion: 0.72},
        {id: 34, name: "Housework", conversion: 0.58},
        {id: 35, name: "Ice skating", conversion: 0.68},
        {id: 36, name: "In-line skating/Rollerblading", conversion: 1.53},
        {id: 37, name: "Jumping rope (skipping), fast", conversion: 2.41},
        {id: 38, name: "Jumping rope (skipping), moderate", conversion: 2.01},
        {id: 39, name: "Kayaking", conversion: 1.22},
        {id: 40, name: "Kickboxing / MMA", conversion: 2.33},
        {id: 41, name: "Lacrosse", conversion: 1.95},
        {id: 42, name: "Martial Arts", conversion: 1.9},
        {id: 43, name: "Mowing lawn", conversion: 0.97},
        {id: 44, name: "Pilates", conversion: 0.73},
        {id: 45, name: "Punching bag", conversion: 1.45},
        {id: 46, name: "Raking lawn/leaves", conversion: 0.97},
        {id: 47, name: "Racquetball", conversion: 1.46},
        {id: 48, name: "Rowing", conversion: 1.18},
        {id: 49, name: "Rowing machine", conversion: 1.71},
        {id: 50, name: "Rugby", conversion: 2.44},
        {id: 51, name: "Running, 12min/mi = 7min/km", conversion: 1.43},
        {id: 52, name: "Running, 10min/mi = 5.35min/km", conversion: 1.79},
        {id: 53, name: "Running, 8min/mi = 4.28min/km", conversion: 2.24},
        {id: 54, name: "Sailing, boat and board", conversion: 0.73},
        {id: 55, name: "Shoveling snow", conversion: 1.17},
        {id: 56, name: "Skateboarding", conversion: 0.82},
        {id: 57, name: "Skiing, light/moderate", conversion: 0.88},
        {id: 58, name: "Skiing, cross-country", conversion: 0.92},
        {id: 59, name: "Sledding", conversion: 1.27},
        {id: 60, name: "Snowboarding/snowshoeing", conversion: 1.46},
        {id: 61, name: "Snowmobiling", conversion: 0.85},
        {id: 62, name: "Softball", conversion: 1.22},
        {id: 63, name: "Spinning", conversion: 1.61},
        {id: 64, name: "Squash", conversion: 2.80},
        {id: 65, name: "Stair climbing, machine", conversion: 1.61},
        {id: 66, name: "Stair climbing, down stairs", conversion: 0.57},
        {id: 67, name: "Stair climbing, up stairs", conversion: 1.46},
        {id: 68, name: "Surfing", conversion: 0.73},
        {id: 69, name: "Swimming, butterfly", conversion: 2.19},
        {id: 70, name: "Swimming, freestyle/breaststroke", conversion: 1.46},
        {id: 71, name: "Swimming, treading/leisure", conversion: 0.93},
        {id: 72, name: "Table tennis", conversion: 0.97},
        {id: 73, name: "Tae Bo", conversion: 2.01},
        {id: 74, name: "Tai Chi", conversion: 0.32},
        {id: 75, name: "Tennis", conversion: 1.61},
        {id: 76, name: "Trampoline", conversion: 0.72},
        {id: 77, name: "Volleyball", conversion: 0.73},
        {id: 78, name: "Walking, stroll", conversion: 0.49},
        {id: 79, name: "Walking, average", conversion: 0.68},
        {id: 80, name: "Walking, power", conversion: 1.26},
        {id: 81, name: "Washing a car", conversion: 0.57},
        {id: 82, name: "Water aerobics", conversion: 0.93},
        {id: 83, name: "Water polo", conversion: 2.44},
        {id: 84, name: "Water skiing", conversion: 1.17},
        {id: 85, name: "Weight lifting, light", conversion: 0.54},
        {id: 86, name: "Weight lifting, heavy", conversion: 1.40},
        {id: 87, name: "Wrestling", conversion: 1.17},
        {id: 88, name: "Yoga", conversion: 0.36},
    ]

    let selectedUnit = units[0];
    let selectedActivity
    let durationInput;
    $: convertedValue = selectedActivity && duration ? Math.round(duration * selectedActivity.conversion * 0.1 * 1000 * selectedUnit.multiplier) / 1000: 0;

    const copy = () => {
        const app = new CopyClipBoard({
            target: document.getElementById('clipboard'),
            props: { name: convertedValue },
        });
        app.$destroy();
    }


</script>

<main>
    <h1>The Conqueror</h1>
    <h2>Activity Converter</h2>
    <form class="content">
        <label>Unit</label>
        <Select items={units} bind:value={selectedUnit} isClearable={false} />
        <label>Activity</label>
        <AutoComplete items="{conversions}" bind:selectedItem="{selectedActivity}" labelFieldName="name" onBlur={() => durationInput.focus()} lock={true} />
        <label>Duration (minutes)</label>
        <input type="text" bind:this={durationInput} bind:value={duration} min=0 />
        <label>Converted (km)</label>
            <input type="text" readonly value={convertedValue} />
    </form>
    <Button on:click={copy}>copy</Button>
    <div id="clipboard"></div>

    <footer>
        <span>The Conqueror official activity conversion chart <a href="https://help.theconqueror.events/en/articles/2027324-activity-conversion-chart">can be found here</a></span>
        <p>This site is not affiliated with The Conqueror</p>
    </footer>
</main>

<style>
    main {
        text-align: center;
        margin: 0 auto;

        min-height: 100%;
    }
    .content {
        margin: auto;
        padding: 10px;
        justify-content: center;
        width: 100%;
        display: grid;
        grid-template-columns: 40% 60%;
        grid-column-gap: 10px;
        grid-gap: 3px;
        max-width: none;
    }

    h1 {
        color: white;
        background-color: black;
        font-size: 3em;
        font-weight: 100;
        padding-top: 10px;
    }

    h2 {
        color: white;
        background-color: black;
        font-size: 2em;
        font-weight: 100;
        padding-bottom: 10px;
    }
    footer {
        opacity: 50%;
        text-align: center;
        padding: 3px;
        color: black;
        bottom: 0;
        position: fixed;
        width: 100%;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }

        .content {
            max-width: 50%;
        }
    }
</style>
