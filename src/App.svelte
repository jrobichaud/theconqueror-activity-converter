<script>
    import 'bulma/css/bulma.css'
    import AutoComplete from "simple-svelte-autocomplete"
    import Select from 'svelte-select';
    import CopyClipBoard from './CopyClipboard.svelte';
    import {Button, Toast} from 'svelma';
    import {writable} from "svelte/store";

    const units = [
        {value: "metric", label: "Metric", multiplier: 1, unit: "km", unit_details: "details_km"},
        {value: "imperial", label: "Imperial", multiplier: 1.60934, unit: "miles", unit_details: "details_miles"},
    ]
    export let duration;
    const activities = [
        {id: 1, name: "Aerobics, low intensity", miles: 0.64, km: 1.02},
        {id: 2, name: "Aerobics, high intensity", miles: 0.91, km: 1.46},
        {id: 3, name: "Aerobics, step", miles: 0.77, km: 1.23},
        {id: 4, name: "Badminton", miles: 0.66, km: 1.05},
        {id: 5, name: "Ballet dancing", miles: 0.6, km: 0.97},
        {id: 6, name: "Baseball", miles: 0.65, km: 1.05},
        {id: 7, name: "Basketball", miles: 0.65, km: 1.05},
        {id: 8, name: "Bicycling, easy", details_miles: " (8.7mi/h)", details_km: "(14km/h)", miles: 1.4, km: 2.25},
        {id: 9, name: "Bicycling, moderate", details_miles: " (15mi/h)", details_km: "(24km/h)", miles: 2.5, km: 4.02},
        {id: 10, name: "Bicycling, vigorous", details_miles: " (20mi/h)", details_km: "(32km/h)", miles: 3.3, km: 5.31},
        {id: 11, name: "Bowling", miles: 0.36, km: 0.57},
        {id: 12, name: "Boxing", miles: 1.11, km: 1.79},
        {id: 13, name: "Calisthenics", miles: 0.53, km: 0.85},
        {id: 14, name: "Canoeing", miles: 0.46, km: 0.73},
        {id: 15, name: "Cheerleading", miles: 0.5, km: 0.8},
        {id: 16, name: "Circuit training (squats, lunges, pushups, burpees, situps etc)", miles: 1.0, km: 1.6},
        {id: 17, name: "Climbing, indoor/outdoor", miles: 1.35, km: 2.17},
        {id: 18, name: "Croquet", miles: 0.38, km: 0.61},
        {id: 19, name: "CrossFit", miles: 1.25, km: 2.01},
        {id: 20, name: "Dancing", miles: 0.55, km: 0.88},
        {id: 21, name: "Elliptical trainer", miles: 1.02, km: 1.63},
        {id: 22, name: "Fencing", miles: 0.91, km: 1.46},
        {id: 23, name: "Fishing", miles: 0.46, km: 0.73},
        {id: 24, name: "Football/soccer", miles: 1.0, km: 1.6},
        {id: 25, name: "Gardening / yard work", miles: 0.4, km: 0.64},
        {id: 26, name: "Golf (carrying clubs)", miles: 0.55, km: 0.88},
        {id: 27, name: "Grocery shopping", miles: 0.34, km: 0.54},
        {id: 28, name: "Gymnastics", miles: 0.61, km: 0.97},
        {id: 29, name: "Handball", miles: 1.74, km: 2.8},
        {id: 30, name: "HIIT", miles: 1.25, km: 2.01},
        {id: 31, name: "Hiking / orienteering", miles: 1.16, km: 1.87},
        {id: 32, name: "Hockey, field and ice", miles: 1.2, km: 1.93},
        {id: 33, name: "Horseback riding", miles: 0.45, km: 0.72},
        {id: 34, name: "Housework", miles: 0.36, km: 0.58},
        {id: 35, name: "Ice skating", miles: 0.42, km: 0.68},
        {id: 36, name: "In-line skating/Rollerblading", miles: 0.95, km: 1.53},
        {id: 37, name: "Jumping rope (skipping), fast", miles: 1.5, km: 2.41},
        {id: 38, name: "Jumping rope (skipping), moderate", miles: 1.25, km: 2.01},
        {id: 39, name: "Kayaking", miles: 0.76, km: 1.22},
        {id: 40, name: "Kickboxing / MMA", miles: 1.45, km: 2.33},
        {id: 41, name: "Lacrosse", miles: 1.21, km: 1.95},
        {id: 42, name: "Martial Arts", miles: 1.18, km: 1.9},
        {id: 43, name: "Mowing lawn", miles: 0.6, km: 0.97},
        {id: 44, name: "Pilates", miles: 0.46, km: 0.73},
        {id: 45, name: "Punching bag", miles: 0.9, km: 1.45},
        {id: 46, name: "Raking lawn/leaves", miles: 0.61, km: 0.97},
        {id: 47, name: "Racquetball", miles: 0.91, km: 1.46},
        {id: 48, name: "Rowing", miles: 0.74, km: 1.18},
        {id: 49, name: "Rowing machine", miles: 1.06, km: 1.71},
        {id: 50, name: "Rugby", miles: 1.52, km: 2.44},
        {id: 51, name: "Running", details_miles: "(12min/mi)", details_km: "(7min/km)", miles: 0.89, km: 1.43},
        {id: 52, name: "Running", details_miles: "(10min/mi)", details_km: "(5.35min/km)", miles: 1.11, km: 1.79},
        {id: 53, name: "Running", details_miles: "(8min/mi)", details_km: "(4.28min/km)", miles: 1.39, km: 2.24},
        {id: 54, name: "Sailing, boat and board", miles: 0.46, km: 0.73},
        {id: 55, name: "Shoveling snow", miles: 0.12, km: 1.17},
        {id: 56, name: "Skateboarding", miles: 0.51, km: 0.82},
        {id: 57, name: "Skiing, light/moderate", miles: 0.55, km: 0.88},
        {id: 58, name: "Skiing, cross-country", miles: 0.57, km: 0.92},
        {id: 59, name: "Sledding", miles: 0.79, km: 1.27},
        {id: 60, name: "Snowboarding/snowshoeing", miles: 0.91, km: 1.46},
        {id: 61, name: "Snowmobiling", miles: 0.53, km: 0.85},
        {id: 62, name: "Softball", miles: 0.76, km: 1.22},
        {id: 63, name: "Spinning", miles: 1.0, km: 1.61},
        {id: 64, name: "Squash", miles: 1.74, km: 2.80},
        {id: 65, name: "Stair climbing, machine", miles: 1.0, km: 1.61},
        {id: 66, name: "Stair climbing, down stairs", miles: 0.36, km: 0.57},
        {id: 67, name: "Stair climbing, up stairs", miles: 0.91, km: 1.46},
        {id: 68, name: "Surfing", miles: 0.46, km: 0.73},
        {id: 69, name: "Swimming, butterfly", miles: 1.36, km: 2.19},
        {id: 70, name: "Swimming, freestyle/breaststroke", miles: 0.91, km: 1.46},
        {id: 71, name: "Swimming, treading/leisure", miles: 0.58, km: 0.93},
        {id: 72, name: "Table tennis", miles: 0.6, km: 0.97},
        {id: 73, name: "Tae Bo", miles: 1.25, km: 2.01},
        {id: 74, name: "Tai Chi", miles: 0.2, km: 0.32},
        {id: 75, name: "Tennis", miles: 1.0, km: 1.61},
        {id: 76, name: "Trampoline", miles: 0.45, km: 0.72},
        {id: 77, name: "Volleyball", miles: 0.46, km: 0.73},
        {id: 78, name: "Walking, stroll", miles: 0.31, km: 0.49},
        {id: 79, name: "Walking, average", miles: 0.42, km: 0.68},
        {id: 80, name: "Walking, power", miles: 0.78, km: 1.26},
        {id: 81, name: "Washing a car", miles: 0.36, km: 0.57},
        {id: 82, name: "Water aerobics", miles: 0.58, km: 0.93},
        {id: 83, name: "Water polo", miles: 1.52, km: 2.44},
        {id: 84, name: "Water skiing", miles: 0.73, km: 1.17},
        {id: 85, name: "Weight lifting, light", miles: 0.34, km: 0.54},
        {id: 86, name: "Weight lifting, heavy", miles: 0.87, km: 1.40},
        {id: 87, name: "Wrestling", miles: 0.73, km: 1.17},
        {id: 88, name: "Yoga", miles: 0.23, km: 0.36},
    ]
    const storedUnit = localStorage.getItem("unit");
    let selectedUnit = writable(units.find(unit => unit.unit === storedUnit )??units[0]);
    selectedUnit.subscribe(unit => {
        localStorage.setItem("unit", unit.unit);
    });

    const storedActivity = localStorage.getItem("activity");
    let selectedActivity = writable(activities.find(activity => activity.id + "" === storedActivity )??undefined);
    selectedActivity.subscribe((activity) => {
        activity && localStorage.setItem("activity", activity.id);
    });

    let durationInput;
    $: convertedValue = $selectedActivity && duration ? Math.round(duration * $selectedActivity[$selectedUnit.unit] * 0.1 * 100) / 100 : 0;

    const copy = () => {
        const app = new CopyClipBoard({
            target: document.getElementById('clipboard'),
            props: {name: convertedValue},
        });
        app.$destroy();
        Toast.create({ message: 'Copied to clipboard!', type: 'is-success', position: 'is-top', duration: 2000 });
    }


</script>

<main>
    <h1>The Converter</h1>
    <h2>Unofficial The Conqueror Activity Converter</h2>
    <form class="content">
        <label>Unit</label>
        <Select items={units} bind:value={$selectedUnit} isClearable={false}/>
        <label>Activity</label>
        <AutoComplete items="{activities}" bind:selectedItem="{$selectedActivity}" onBlur={() => durationInput.focus()}}
                      labelFieldName="name"
                      keywordsFunction={(item) => item.name + (item[$selectedUnit.unit_details]??"")}
                      lock={true}>
            <div slot="item" let:item={item} let:label={label}>
                {@html label}
                <span>{item[$selectedUnit.unit_details] ?? ""}</span>
            </div>
        </AutoComplete>
        <label>Duration (minutes)</label>
        <input type="text" bind:this={durationInput} bind:value={duration} min=0/>
        <label>Converted ({$selectedUnit.unit})</label>
        <input type="text" readonly value={convertedValue}/>
    </form>
    <Button on:click={copy}>copy</Button>
    <div id="clipboard"></div>
    <footer>
        <span>Official activity conversion chart <a
                href="https://help.theconqueror.events/en/articles/2027324-activity-conversion-chart">can be found here</a></span>
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
        font-size: 1em;
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
