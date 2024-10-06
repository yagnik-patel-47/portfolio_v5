import {
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandDialog,
} from "@/components/ui/command";
import { commands } from "@/lib/site-commands-config";
import React, { useEffect, useState } from "react";
import { DialogTitle } from "../ui/dialog";

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
			<DialogTitle className="sr-only">Site Commands</DialogTitle>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				{commands.map((commandGroup) => (
					<CommandGroup key={commandGroup.id} heading={commandGroup.label}>
						{commandGroup.commands.map((command) => (
							<CommandItem
								className="!py-2"
								onSelect={
									command.function
										? () => {
												try {
													command.function();
												} catch (error) {}
												setIsOpen(false);
											}
										: () => setIsOpen(false)
								}
								key={command.id}
								asChild={!!command.href}
							>
								{command.href ? (
									<a href={command.href}>
										<command.icon className="mr-2 !size-4" />
										<span>{command.label}</span>
									</a>
								) : (
									<React.Fragment>
										<command.icon className="mr-2 !size-4" />
										<span>{command.label}</span>
									</React.Fragment>
								)}
							</CommandItem>
						))}
					</CommandGroup>
				))}
			</CommandList>
		</CommandDialog>
	);
}
