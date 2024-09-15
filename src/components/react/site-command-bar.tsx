import {
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandDialog,
} from "@/components/ui/command";
import { commands } from "@/lib/site-commands-config";
import { useEffect, useState } from "react";

export default function SiteCommandBar() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setIsOpen((open) => !open);
			}
		});

		document
			.querySelector("#command-bar-button")
			?.addEventListener("click", () => {
				setIsOpen((open) => !open);
			});
	}, []);

	return (
		<CommandDialog open={isOpen} onOpenChange={setIsOpen}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				{commands.map((commandGroup) => (
					<CommandGroup key={commandGroup.id} heading={commandGroup.label}>
						{commandGroup.commands.map((command) => (
							<CommandItem
								className="!py-2"
								onSelect={async () => {
									try {
										await command.function();
									} catch (error) {
										alert(error.message);
									}
									setIsOpen(false);
								}}
								key={command.id}
							>
								<command.icon className="mr-2 !size-4" />
								<span>{command.label}</span>
							</CommandItem>
						))}
					</CommandGroup>
				))}
			</CommandList>
		</CommandDialog>
	);
}
